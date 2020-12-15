using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular_NETCORE.Models;

namespace Angular_NETCORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TblSessionSettingsController : ControllerBase
    {
        private readonly test_coreContext _context;

        public TblSessionSettingsController(test_coreContext context)
        {
            _context = context;
        }

        // GET: api/TblSessionSettings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblSessionSetting>>> GetTblSessionSettings()
        {
            return await _context.TblSessionSettings.ToListAsync();
        }

        // GET: api/TblSessionSettings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblSessionSetting>> GetTblSessionSetting(int id)
        {
            var tblSessionSetting = await _context.TblSessionSettings.FindAsync(id);

            if (tblSessionSetting == null)
            {
                return NotFound();
            }

            return tblSessionSetting;
        }

        // PUT: api/TblSessionSettings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblSessionSetting(int id, TblSessionSetting tblSessionSetting)
        {
            if (id != tblSessionSetting.SessionSettingId)
            {
                return BadRequest();
            }

            _context.Entry(tblSessionSetting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblSessionSettingExists(id))
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

        // POST: api/TblSessionSettings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TblSessionSetting>> PostTblSessionSetting(TblSessionSetting tblSessionSetting)
        {
            _context.TblSessionSettings.Add(tblSessionSetting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblSessionSetting", new { id = tblSessionSetting.SessionSettingId }, tblSessionSetting);
        }

        // DELETE: api/TblSessionSettings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblSessionSetting>> DeleteTblSessionSetting(int id)
        {
            var tblSessionSetting = await _context.TblSessionSettings.FindAsync(id);
            if (tblSessionSetting == null)
            {
                return NotFound();
            }

            _context.TblSessionSettings.Remove(tblSessionSetting);
            await _context.SaveChangesAsync();

            return tblSessionSetting;
        }

        private bool TblSessionSettingExists(int id)
        {
            return _context.TblSessionSettings.Any(e => e.SessionSettingId == id);
        }
    }
}
