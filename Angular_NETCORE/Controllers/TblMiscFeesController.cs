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
    public class TblMiscFeesController : ControllerBase
    {
        private readonly test_coreContext _context;

        public TblMiscFeesController(test_coreContext context)
        {
            _context = context;
        }

        // GET: api/TblMiscFees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblMiscFee>>> GetTblMiscFees()
        {
            return await _context.TblMiscFees.ToListAsync();
        }

        // GET: api/TblMiscFees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblMiscFee>> GetTblMiscFee(int id)
        {
            var tblMiscFee = await _context.TblMiscFees.FindAsync(id);

            if (tblMiscFee == null)
            {
                return NotFound();
            }

            return tblMiscFee;
        }

        // PUT: api/TblMiscFees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblMiscFee(int id, TblMiscFee tblMiscFee)
        {
            if (id != tblMiscFee.MiscFeeId)
            {
                return BadRequest();
            }

            _context.Entry(tblMiscFee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblMiscFeeExists(id))
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

        // POST: api/TblMiscFees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TblMiscFee>> PostTblMiscFee(TblMiscFee tblMiscFee)
        {
            _context.TblMiscFees.Add(tblMiscFee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblMiscFee", new { id = tblMiscFee.MiscFeeId }, tblMiscFee);
        }

        // DELETE: api/TblMiscFees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblMiscFee>> DeleteTblMiscFee(int id)
        {
            var tblMiscFee = await _context.TblMiscFees.FindAsync(id);
            if (tblMiscFee == null)
            {
                return NotFound();
            }

            _context.TblMiscFees.Remove(tblMiscFee);
            await _context.SaveChangesAsync();

            return tblMiscFee;
        }

        private bool TblMiscFeeExists(int id)
        {
            return _context.TblMiscFees.Any(e => e.MiscFeeId == id);
        }
    }
}
