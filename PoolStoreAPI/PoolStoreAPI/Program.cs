using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PoolStoreAPI.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using PoolStoreAPI.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<DBContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("OrdinaryGeeksDev")));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddIdentityCore<User>(
    option =>
    {
        option.User.RequireUniqueEmail = true;

    }

).AddRoles<IdentityRole>().AddEntityFrameworkStores<DBContext>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(option => {
    option.TokenValidationParameters = new TokenValidationParameters{
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime=true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey=  new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(builder.Configuration["JWTSettings:TokenKey"]!))
    };
});
builder.Services.AddAuthorization();

builder.Services.AddScoped<TokenService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseCors(options => options.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000", "https://localhost:3000", "http://localhost:8100", "https://localohost:8100").AllowCredentials());

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<DBContext>();
var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
try
{
    await context.Database.MigrateAsync();
    await DBInitializer.Initialize(context,roleManager, userManager);
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occurred during migration");
    throw;
}

app.Run();
