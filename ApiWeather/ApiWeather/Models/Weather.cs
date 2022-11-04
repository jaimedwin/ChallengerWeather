namespace ApiWeather.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Weather")]
    public partial class Weather
    {
        public long ID { get; set; }

        public byte Precipitation { get; set; }

        public byte Humidity { get; set; }

        public byte Wind { get; set; }

        public DateTime Date { get; set; }

        public int CityID { get; set; }

        public bool Status { get; set; }

        public DateTime UpdateAt { get; set; }

        public DateTime CreateAt { get; set; }

        public DateTime DeleteAt { get; set; }

        public long UserID { get; set; }

        public virtual City City { get; set; }

        public virtual User User { get; set; }
    }

}
