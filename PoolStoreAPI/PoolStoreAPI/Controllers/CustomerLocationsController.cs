using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PoolStoreAPI.Models;
using PoolStoreApi.Models;

namespace PoolStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerLocationsController : ControllerBase
    {
        private readonly DBContext _context;

        public CustomerLocationsController(DBContext context)
        {
            _context = context;
        }

        // GET: api/CustomerLocations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerLocation>>> GetCustomerLocation()
        {
            return await _context.CustomerLocation.ToListAsync();
        }

        // GET: api/CustomerLocations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerLocation>> GetCustomerLocation(int id)
        {
            var customerLocation = await _context.CustomerLocation.FindAsync(id);

            if (customerLocation == null)
            {
                return NotFound();
            }

            return customerLocation;
        }

        // PUT: api/CustomerLocations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerLocation(int id, CustomerLocation customerLocation)
        {
            if (id != customerLocation.Id)
            {
                return BadRequest();
            }

            _context.Entry(customerLocation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerLocationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CustomerLocations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CustomerLocation>> PostCustomerLocation(CustomerLocation customerLocation)
        {
            _context.CustomerLocation.Add(customerLocation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomerLocation", new { id = customerLocation.Id }, customerLocation);
        }

        // DELETE: api/CustomerLocations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerLocation(int id)
        {
            var customerLocation = await _context.CustomerLocation.FindAsync(id);
            if (customerLocation == null)
            {
                return NotFound();
            }

            _context.CustomerLocation.Remove(customerLocation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerLocationExists(int id)
        {
            return _context.CustomerLocation.Any(e => e.Id == id);
        }
    }
}
