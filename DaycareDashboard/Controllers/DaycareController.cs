﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DaycareDashboard.Controllers
{
    [RoutePrefix("api/daycare")]
    public class DaycareController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> GetBabyActivitiesLog()
        {
            return null;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}

//[RoutePrefix("api/heroes")]
//public class HeroesController : ApiController
//{
//    [Route("GetHeroes")]
//    public List<Hero> GetHeroes()
//    {
//        return DB.heroes;
//    }

//    [Route("edit")]
//    public bool Edit(Hero hero)
//    {
//        var fromDb = DB.heroes.FirstOrDefault(x => x.Id == hero.Id);
//        if (fromDb == null)
//            return false;

//        fromDb.Name = hero.Name;
//        return true;
//    }

//    [Route("remove")]
//    public bool Remove(int id)
//    {
//        var fromDb = DB.heroes.FirstOrDefault(x => x.Id == id);
//        if (fromDb == null)
//            return false;

//        DB.heroes.Remove(fromDb);
//        return true;
//    }
//}