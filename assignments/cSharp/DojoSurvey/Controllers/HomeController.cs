using Microsoft.AspNetCore.Mvc;
namespace DojoSurvey.Controllers;

public class HomeController : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        return View();
    }

    [HttpPost]
    [Route("/result")]
    public ViewResult Results(string name, string location, string language, string comments)
    {
        ViewBag.Name = name;
        ViewBag.Location = location;
        ViewBag.Language = language;
        ViewBag.Comments = comments;
        return View("Submission");
    }
}