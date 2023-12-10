using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PoolStoreAPI.Models;

namespace PoolStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaintenanceDatesController : ControllerBase
    {
        private readonly DBContext _context;

        public MaintenanceDatesController(DBContext context)
        {
            _context = context;
        }

        // GET: api/MaintenanceDates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MaintenanceDate>>> GetMaintenanceDate()
        {
            return await _context.MaintenanceDate.ToListAsync();
        }

        // GET: api/MaintenanceDates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MaintenanceDate>> GetMaintenanceDate(int id)
        {
            var maintenanceDate = await _context.MaintenanceDate.FindAsync(id);

            if (maintenanceDate == null)
            {
                return NotFound();
            }

            return maintenanceDate;
        }

        // PUT: api/MaintenanceDates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaintenanceDate(int id, MaintenanceDate maintenanceDate)
        {
            if (id != maintenanceDate.Id)
            {
                return BadRequest();
            }

            _context.Entry(maintenanceDate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaintenanceDateExists(id))
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

        // POST: api/MaintenanceDates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MaintenanceDate>> PostMaintenanceDate(MaintenanceDate maintenanceDate)
        {
            _context.MaintenanceDate.Add(maintenanceDate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaintenanceDate", new { id = maintenanceDate.Id }, maintenanceDate);
        }

        // DELETE: api/MaintenanceDates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaintenanceDate(int id)
        {
            var maintenanceDate = await _context.MaintenanceDate.FindAsync(id);
            if (maintenanceDate == null)
            {
                return NotFound();
            }

            _context.MaintenanceDate.Remove(maintenanceDate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MaintenanceDateExists(int id)
        {
            return _context.MaintenanceDate.Any(e => e.Id == id);
        }
    }
}
