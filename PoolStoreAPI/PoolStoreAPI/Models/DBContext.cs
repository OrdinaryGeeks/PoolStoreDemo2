




using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PoolStoreAPI.Models;
using PoolStoreApi.Models;

namespace PoolStoreAPI.Models{
public class DBContext : IdentityDbContext<User>{


public DBContext(DbContextOptions options):base(options){


    
}
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(new IdentityRole { Name = "Member", NormalizedName = "MEMBER" },
            new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" },
            new IdentityRole {Name="Maintenance", NormalizedName="MAINTENANCE"},
            new IdentityRole {Name="Customer", NormalizedName="CUSTOMER"}
            );
        }

        public DbSet<PoolStoreAPI.Models.Item> Item { get; set; } = default!;


public DbSet<PoolStoreAPI.Models.Location> Location { get; set; } = default!;
    public DbSet<PoolStoreAPI.Models.Customer> Customer { get; set; } = default!;
    public DbSet<PoolStoreApi.Models.CustomerLocation> CustomerLocation { get; set; } = default!;
    public DbSet<PoolStoreAPI.Models.Maintenance> Maintenance { get; set; } = default!;
    public DbSet<PoolStoreAPI.Models.MaintenanceDate> MaintenanceDate { get; set; } = default!;
    public DbSet<PoolStoreAPI.Models.MaintenanceItem> MaintenanceItem { get; set; } = default!;
    public DbSet<PoolStoreAPI.Models.MaintenanceMan> MaintenanceMan { get; set; } = default!;

}
}