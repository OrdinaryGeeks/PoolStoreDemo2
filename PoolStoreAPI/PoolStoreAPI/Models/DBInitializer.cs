using Microsoft.AspNetCore.Identity;


namespace PoolStoreAPI.Models
{
    public class DBInitializer
    {
        
        public static async Task Initialize(DBContext context, RoleManager<IdentityRole> roleManager, UserManager<User> userManager)
        {


            


            if (!await roleManager.RoleExistsAsync("Maintenance"))
                await roleManager.CreateAsync(new IdentityRole("Maintenance"));

            if (!await roleManager.RoleExistsAsync("Customer"))
                await roleManager.CreateAsync(new IdentityRole("Customer"));

           
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "user1",
                    Email = "user1@user1.com"
                };

                await userManager.CreateAsync(user, "CrazyPa$$12");
                await userManager.AddToRoleAsync(user, "Member");


                var admin = new User
                {
                    UserName = "admin1",
                    Email = "admin1@admin1.com"
                };

                await userManager.CreateAsync(admin, "CrazyPa$$12");
                await userManager.AddToRolesAsync(admin, new[] { "Member", "Admin" });

            }

            if (!context.Item.Any())
            {
                var items = new List<Item>
                {

                    new Item
                    {
                        ImageURL = "https://th.bing.com/th/id/OIP.KwJeaJQFjzi_TDR5J35k1AHaHa?w=195&h=194&c=7&r=0&o=5&pid=1.7",
                        AvailableInventory = 13,
                        Cost = 5.91f,
                        LocationId = 1,
                        Name = "Intex Pool Pump"
                    },
                    new Item
                    {
                        ImageURL = "https://th.bing.com/th/id/OIP.GpLfNotdPAi3kdAi8mZ_JQHaF7?w=259&h=207&c=7&r=0&o=5&pid=1.7",
                        AvailableInventory = 10,
                        Cost = 50.50f,
                        LocationId = 2,
                        Name = "Pool Cleaner X500"
                    },
                    new Item
                    {
                        ImageURL = "https://th.bing.com/th/id/OIP.GpLfNotdPAi3kdAi8mZ_JQHaF7?w=259&h=207&c=7&r=0&o=5&pid=1.7",
                        AvailableInventory = 5,
                        Cost = 50.50f,
                        LocationId = 1,
                        Name = "Pool Cleaner X500"
                    },

                };
                foreach (var Item in items)
                {
                    context.Item.Add(Item);
                }

            }
            if (!context.Location.Any())
            {

                var locations = new List<Location>
                {
                    new Location
                    {
                        City = "Fake City",
                        State = "Mississippi",
                        Name = "Pool Supply And Service",
                        LocationImageURL = "https://th.bing.com/th?id=OIP.ciWXMQNjEf9-Zgn5Jk5IjQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                        PhoneNumber = "1111111111",
                        StreetAddress = "345 Totally Fake Road"
                    },
                    new Location
                    {
                        City = "Grand Fake City",
                        State = "Mississippi",
                        Name = "Splash Pools",
                        LocationImageURL = "https://th.bing.com/th?id=OIP.iUZBN4ursbpbtyEVINod9gHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                        PhoneNumber = "2222222222",
                        StreetAddress = "123 Fake Drive"
                    }

                };

                foreach (var Location in locations)
                {
                    context.Location.Add(Location);
                }

                await context.SaveChangesAsync();


            }

        }
    }
}
