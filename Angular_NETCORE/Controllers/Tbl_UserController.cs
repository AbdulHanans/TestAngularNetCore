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
    public class Tbl_UserController : ControllerBase
    {
        private readonly test_coreContext _context;

        public Tbl_UserController(test_coreContext context)
        {
            _context = context;
        }

        // GET: api/Tbl_User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tbl_User>>> GetTbl_Users()
        {
            return await _context.Tbl_Users.ToListAsync();
        }

        // GET: api/Tbl_User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tbl_User>> GetTbl_User(int id)
        {
            var tbl_User = await _context.Tbl_Users.FindAsync(id);

            if (tbl_User == null)
            {
                return NotFound();
            }

            return tbl_User;
        }

        // PUT: api/Tbl_User/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTbl_User(int id, Tbl_User tbl_User)
        {
            if (id != tbl_User.UserId)
            {
                return BadRequest();
            }

            _context.Entry(tbl_User).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Tbl_UserExists(id))
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

        // POST: api/Tbl_User
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tbl_User>> PostTbl_User(Tbl_User tbl_User)
        {
            _context.Tbl_Users.Add(tbl_User);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTbl_User", new { id = tbl_User.UserId }, tbl_User);
        }

        // DELETE: api/Tbl_User/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tbl_User>> DeleteTbl_User(int id)
        {
            var tbl_User = await _context.Tbl_Users.FindAsync(id);
            if (tbl_User == null)
            {
                return NotFound();
            }

            _context.Tbl_Users.Remove(tbl_User);
            await _context.SaveChangesAsync();

            return tbl_User;
        }

        private bool Tbl_UserExists(int id)
        {
            return _context.Tbl_Users.Any(e => e.UserId == id);
        }
    }
}
