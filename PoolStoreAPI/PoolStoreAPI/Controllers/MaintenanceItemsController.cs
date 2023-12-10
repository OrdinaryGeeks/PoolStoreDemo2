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
    public class MaintenanceItemsController : ControllerBase
    {
        private readonly DBContext _context;

        public MaintenanceItemsController(DBContext context)
        {
            _context = context;
        }

        // GET: api/MaintenanceItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MaintenanceItem>>> GetMaintenanceItem()
        {
            return await _context.MaintenanceItem.ToListAsync();
        }

        // GET: api/MaintenanceItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MaintenanceItem>> GetMaintenanceItem(int id)
        {
            var maintenanceItem = await _context.MaintenanceItem.FindAsync(id);

            if (maintenanceItem == null)
            {
                return NotFound();
            }

            return maintenanceItem;
        }

        // PUT: api/MaintenanceItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaintenanceItem(int id, MaintenanceItem maintenanceItem)
        {
            if (id != maintenanceItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(maintenanceItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaintenanceItemExists(id))
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

        // POST: api/MaintenanceItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MaintenanceItem>> PostMaintenanceItem(MaintenanceItem maintenanceItem)
        {
            _context.MaintenanceItem.Add(maintenanceItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaintenanceItem", new { id = maintenanceItem.Id }, maintenanceItem);
        }

        // DELETE: api/MaintenanceItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaintenanceItem(int id)
        {
            var maintenanceItem = await _context.MaintenanceItem.FindAsync(id);
            if (maintenanceItem == null)
            {
                return NotFound();
            }

            _context.MaintenanceItem.Remove(maintenanceItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MaintenanceItemExists(int id)
        {
            return _context.MaintenanceItem.Any(e => e.Id == id);
        }
    }
}
