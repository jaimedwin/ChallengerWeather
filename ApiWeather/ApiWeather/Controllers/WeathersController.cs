using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ApiWeather.Models;
using ApiWeather.Models.Request;

namespace ApiWeather.Controllers
{
    public class WeathersController : ApiController
    {
        private DB db = new DB();

        // GET: api/Weathers
        public IQueryable<Weather> GetWeather()
        {
            return db.Weather;
        }

        // GET: api/Weathers/5
        [ResponseType(typeof(Weather))]
        public IHttpActionResult GetWeather(long id)
        {
            Console.WriteLine(id);
            Weather weather = db.Weather.Find(id);
            if (weather == null)
            {
                return NotFound();
            }
            Console.WriteLine(id);
            Console.WriteLine(weather);

            return Ok(weather);
        }

        // PUT: api/Weathers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PatchWeather(long id, Weather weather)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != weather.ID)
            {
                return BadRequest();
            }

            weather.UpdateAt = DateTime.Now;

            db.Entry(weather).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeatherExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Weathers
        [ResponseType(typeof(Weather))]
        public IHttpActionResult PostWeather(Weather weather)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            DateTime localTime = DateTime.Now;

            // Audit fields
            weather.CreateAt = localTime;
            weather.UpdateAt = localTime;
            weather.DeleteAt = localTime;
            weather.Status = true;

            db.Weather.Add(weather);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = weather.ID }, weather);
        }

        // DELETE: api/Weathers/5
        [ResponseType(typeof(Weather))]
        public IHttpActionResult DeleteWeather(long id)
        {
            Weather weather = db.Weather.Find(id);
            if (weather == null)
            {
                return NotFound();
            }

            db.Weather.Remove(weather);
            db.SaveChanges();

            return Ok(weather);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WeatherExists(long id)
        {
            return db.Weather.Count(e => e.ID == id) > 0;
        }
    }
}