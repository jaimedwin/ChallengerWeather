﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ApiWeather.Models.ViewModel
{
    public class StateViewModel
    {

        public int ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public int CountryID { get; set; }

        public virtual Country Country { get; set; }
    }
}