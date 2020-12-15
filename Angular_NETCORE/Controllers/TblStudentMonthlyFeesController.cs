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
    public class TblStudentMonthlyFeesController : ControllerBase
    {
        private readonly test_coreContext _context;

        public TblStudentMonthlyFeesController(test_coreContext context)
        {
            _context = context;
        }

        // GET: api/TblStudentMonthlyFees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblStudentMonthlyFee>>> GetTblStudentMonthlyFees()
        {
            return await _context.TblStudentMonthlyFees.ToListAsync();
        }

        // GET: api/TblStudentMonthlyFees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblStudentMonthlyFee>> GetTblStudentMonthlyFee(int id)
        {
            var tblStudentMonthlyFee = await _context.TblStudentMonthlyFees.FindAsync(id);

            if (tblStudentMonthlyFee == null)
            {
                return NotFound();
            }

            return tblStudentMonthlyFee;
        }

        // PUT: api/TblStudentMonthlyFees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblStudentMonthlyFee(int id, TblStudentMonthlyFee tblStudentMonthlyFee)
        {
            if (id != tblStudentMonthlyFee.StudentMonthlyFeeId)
            {
                return BadRequest();
            }

            _context.Entry(tblStudentMonthlyFee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblStudentMonthlyFeeExists(id))
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

        // POST: api/TblStudentMonthlyFees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TblStudentMonthlyFee>> PostTblStudentMonthlyFee(TblStudentMonthlyFee tblStudentMonthlyFee)
        {
            _context.TblStudentMonthlyFees.Add(tblStudentMonthlyFee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblStudentMonthlyFee", new { id = tblStudentMonthlyFee.StudentMonthlyFeeId }, tblStudentMonthlyFee);
        }

        // DELETE: api/TblStudentMonthlyFees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblStudentMonthlyFee>> DeleteTblStudentMonthlyFee(int id)
        {
            var tblStudentMonthlyFee = await _context.TblStudentMonthlyFees.FindAsync(id);
            if (tblStudentMonthlyFee == null)
            {
                return NotFound();
            }

            _context.TblStudentMonthlyFees.Remove(tblStudentMonthlyFee);
            await _context.SaveChangesAsync();

            return tblStudentMonthlyFee;
        }

        private bool TblStudentMonthlyFeeExists(int id)
        {
            return _context.TblStudentMonthlyFees.Any(e => e.StudentMonthlyFeeId == id);
        }
    }
}
