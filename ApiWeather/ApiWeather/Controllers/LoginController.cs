using ApiWeather.Controllers.Untils;
using ApiWeather.Models;
using ApiWeather.Models.Request;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ApiWeather.Controllers
{
    
    [AllowAnonymous]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        private DB db = new DB();

        public IHttpActionResult GetEchoUser()
        {
            var identity = Thread.CurrentPrincipal.Identity;
            return Ok($" IPrincipal-user: {identity.Name} - IsAuthenticated: {identity.IsAuthenticated}");
        }

        public IHttpActionResult PostAuthenticate(LoginRequest login)
        {
            if (login == null)
                return BadRequest();

            User user = db.User.Where(x => x.Username.ToString() == login.Username.ToString()).FirstOrDefault<User>();
            if (user == null)
                return Unauthorized(); 

            string salt = ConfigurationManager.AppSettings["SALT"];
            string saltedPassword = login.Username + login.Password + salt;
            string hashedPassword = user.Password;

            bool isCredentialValid = (Crypto.VerifyHashedPassword(hashedPassword, saltedPassword));

            if (isCredentialValid)
            {
                var token = TokenGenerator.GenerateTokenJwt(login.Username);
                return Ok( new {
                    ID = user.ID,
                    Username = user.Username,
                    Token = token
                });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}
