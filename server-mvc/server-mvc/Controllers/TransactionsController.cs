using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_mvc.Models;

namespace server_mvc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        // GET: api/Transactions
        [HttpGet]
        public async Task<Transaction[]> Get()
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage resp = await client.GetAsync("http://localhost:5000/api/transactions");
            // HttpResponseMessage resp = await client.GetAsync("https://localhost:44391/api/transactions");

            var sc = resp.EnsureSuccessStatusCode();
            Transaction[] body = await resp.Content.ReadAsAsync<Transaction[]>(); // .ReadAsStringAsync();

            return body;
        }

        // GET: api/Transactions/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Transactions
        [HttpPost]
        public void Post([FromBody] Transaction transaction)
        {
            var x = transaction;
        }

        // PUT: api/Transactions/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
