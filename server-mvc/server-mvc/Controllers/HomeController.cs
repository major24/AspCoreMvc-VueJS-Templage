using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server_mvc.Models;

namespace server_mvc.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        // Call from UI for get transactions from api
        [HttpGet]
        public async Task<IActionResult> GetTransactions()
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage resp = await client.GetAsync("http://localhost:5000/api/transactions");
            // HttpResponseMessage resp = await client.GetAsync("https://localhost:44391/api/transactions");
        
            var sc = resp.EnsureSuccessStatusCode();
            string body = await resp.Content.ReadAsStringAsync();

            return Json(body);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
