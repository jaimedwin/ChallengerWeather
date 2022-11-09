using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.NetworkInformation;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ApiWeather.Models;

namespace ApiWeather.Controllers
{
    [AllowAnonymous]
    public class UsersController : ApiController
    {
        private DB db = new DB();

        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (user == null)
                return NotFound();

            string salt = ConfigurationManager.AppSettings["SALT"];
            string saltedPassword = user.Username + user.Password + salt;
            string hashedPassword = Crypto.HashPassword(saltedPassword);
            user.Password = hashedPassword;
            db.User.Add(user);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.ID }, user);
        }
    }
}