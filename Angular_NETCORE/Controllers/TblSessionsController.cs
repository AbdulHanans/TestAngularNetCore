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
    public class TblSessionsController : ControllerBase
    {
        private readonly test_coreContext _context;

        public TblSessionsController(test_coreContext context)
        {
            _context = context;
        }

        // GET: api/TblSessions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblSession>>> GetTblSessions()
        {
            return await _context.TblSessions.ToListAsync();
        }

        // GET: api/TblSessions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblSession>> GetTblSession(int id)
        {
            var tblSession = await _context.TblSessions.FindAsync(id);

            if (tblSession == null)
            {
                return NotFound();
            }

            return tblSession;
        }

        // PUT: api/TblSessions/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblSession(int id, TblSession tblSession)
        {
            if (id != tblSession.SessionId)
            {
                return BadRequest();
            }

            _context.Entry(tblSession).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblSessionExists(id))
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

        // POST: api/TblSessions
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TblSession>> PostTblSession(TblSession tblSession)
        {
            _context.TblSessions.Add(tblSession);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblSession", new { id = tblSession.SessionId }, tblSession);
        }

        // DELETE: api/TblSessions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblSession>> DeleteTblSession(int id)
        {
            var tblSession = await _context.TblSessions.FindAsync(id);
            if (tblSession == null)
            {
                return NotFound();
            }

            _context.TblSessions.Remove(tblSession);
            await _context.SaveChangesAsync();

            return tblSession;
        }

        private bool TblSessionExists(int id)
        {
            return _context.TblSessions.Any(e => e.SessionId == id);
        }
    }
}
