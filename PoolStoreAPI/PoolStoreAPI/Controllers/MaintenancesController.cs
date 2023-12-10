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
    public class MaintenancesController : ControllerBase
    {
        private readonly DBContext _context;

        public MaintenancesController(DBContext context)
        {
            _context = context;
        }

        // GET: api/Maintenances
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Maintenance>>> GetMaintenance()
        {
            return await _context.Maintenance.ToListAsync();
        }

        // GET: api/Maintenances/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Maintenance>> GetMaintenance(int id)
        {
            var maintenance = await _context.Maintenance.FindAsync(id);

            if (maintenance == null)
            {
                return NotFound();
            }

            return maintenance;
        }

        // PUT: api/Maintenances/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaintenance(int id, Maintenance maintenance)
        {
            if (id != maintenance.Id)
            {
                return BadRequest();
            }

            _context.Entry(maintenance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaintenanceExists(id))
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

        // POST: api/Maintenances
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Maintenance>> PostMaintenance(Maintenance maintenance)
        {
            _context.Maintenance.Add(maintenance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaintenance", new { id = maintenance.Id }, maintenance);
        }

        // DELETE: api/Maintenances/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaintenance(int id)
        {
            var maintenance = await _context.Maintenance.FindAsync(id);
            if (maintenance == null)
            {
                return NotFound();
            }

            _context.Maintenance.Remove(maintenance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MaintenanceExists(int id)
        {
            return _context.Maintenance.Any(e => e.Id == id);
        }
    }
}
