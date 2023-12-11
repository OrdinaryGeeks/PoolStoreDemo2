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
    public class MaintenanceMenController : ControllerBase
    {
        private readonly DBContext _context;

        public MaintenanceMenController(DBContext context)
        {
            _context = context;
        }

        // GET: api/MaintenanceMen
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MaintenanceMan>>> GetMaintenanceMan()
        {
            return await _context.MaintenanceMan.ToListAsync();
        }

        [HttpGet("MaintenanceManAvailability/{MaintenanceManId}")]
        public async Task<ActionResult<MaintenanceDate[]>>GetMaintenanceManAvailability(int MaintenanceManId){


           return await _context.MaintenanceDate.Where(dateMaintenance => (dateMaintenance.MaintenanceManId == MaintenanceManId)).ToArrayAsync<MaintenanceDate>();

        }

       

        // GET: api/MaintenanceMen/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MaintenanceMan>> GetMaintenanceMan(int id)
        {
            var maintenanceMan = await _context.MaintenanceMan.FindAsync(id);

            if (maintenanceMan == null)
            {
                return NotFound();
            }

            return maintenanceMan;
        }

        // PUT: api/MaintenanceMen/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaintenanceMan(int id, MaintenanceMan maintenanceMan)
        {
            if (id != maintenanceMan.Id)
            {
                return BadRequest();
            }

            _context.Entry(maintenanceMan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaintenanceManExists(id))
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

        // POST: api/MaintenanceMen
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MaintenanceMan>> PostMaintenanceMan(MaintenanceMan maintenanceMan)
        {
            _context.MaintenanceMan.Add(maintenanceMan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaintenanceMan", new { id = maintenanceMan.Id }, maintenanceMan);
        }

        // DELETE: api/MaintenanceMen/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaintenanceMan(int id)
        {
            var maintenanceMan = await _context.MaintenanceMan.FindAsync(id);
            if (maintenanceMan == null)
            {
                return NotFound();
            }

            _context.MaintenanceMan.Remove(maintenanceMan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MaintenanceManExists(int id)
        {
            return _context.MaintenanceMan.Any(e => e.Id == id);
        }
    

     [HttpGet("MaintenanceItemsAssigned/{MaintenanceManId}")]
        public async Task<ActionResult<MaintenanceItem[]>>GetMaintenanceItemsByMaintenanceManId(int MaintenanceManId){


          List<int> maintenanceIds =  await  _context.Maintenance.Where(d => d.MaintenanceManId == MaintenanceManId).Select(d => d.Id).ToListAsync<int>();

          return await _context.MaintenanceItem.Where(d => maintenanceIds.Contains(d.MaintenanceId)).ToArrayAsync();
        }

        

    
}
}