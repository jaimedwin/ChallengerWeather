using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace ApiWeather.Models
{
    public partial class DB : DbContext
    {
        public DB()
            : base("name=DB")
        {
        }

        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Weather> Weather { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            /*
            modelBuilder.Entity<City>()
                .HasMany(e => e.Weather)
                .WithRequired(e => e.City)
                .WillCascadeOnDelete(false);
            */
            modelBuilder.Entity<Country>()
                .Property(e => e.CountryCode)
                .IsUnicode(false);

            /*
            modelBuilder.Entity<Country>()
                .HasMany(e => e.State)
                .WithRequired(e => e.Country)
                .WillCascadeOnDelete(false);

            
            modelBuilder.Entity<State>()
                .HasMany(e => e.City)
                .WithRequired(e => e.State)
                .WillCascadeOnDelete(false);
            */

            
            modelBuilder.Entity<User>()
                .Property(e => e.Email)
                .IsUnicode(false);

            /*
            modelBuilder.Entity<User>()
                .HasMany(e => e.Weather)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);
            */

        }
    }
}
