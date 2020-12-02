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
    public class TblFeesController : ControllerBase
    {
        private readonly test_coreContext _context;

        public TblFeesController(test_coreContext context)
        {
            _context = context;
        }

        // GET: api/TblFees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblFee>>> GetTblFees()
        {
            return await _context.TblFees.ToListAsync();
        }

        // GET: api/TblFees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblFee>> GetTblFee(int id)
        {
            var tblFee = await _context.TblFees.FindAsync(id);

            if (tblFee == null)
            {
                return NotFound();
            }

            return tblFee;
        }

        // PUT: api/TblFees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblFee(int id, TblFee tblFee)
        {
            if (id != tblFee.FeeId)
            {
                return BadRequest();
            }

            _context.Entry(tblFee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblFeeExists(id))
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

        // POST: api/TblFees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TblFee>> PostTblFee(TblFee tblFee)
        {
            _context.TblFees.Add(tblFee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblFee", new { id = tblFee.FeeId }, tblFee);
        }

        // DELETE: api/TblFees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblFee>> DeleteTblFee(int id)
        {
            var tblFee = await _context.TblFees.FindAsync(id);
            if (tblFee == null)
            {
                return NotFound();
            }

            _context.TblFees.Remove(tblFee);
            await _context.SaveChangesAsync();

            return tblFee;
        }

        private bool TblFeeExists(int id)
        {
            return _context.TblFees.Any(e => e.FeeId == id);
        }
    }
}
