using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ApiWeather.Models.ViewModel
{
    public class CityViewModel
    {
        public CityViewModel()
        {
            Weather = new HashSet<Weather>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public int StateID { get; set; }

        public StateViewModel State { get; set; }

        public virtual ICollection<Weather> Weather { get; set; }
    }
}