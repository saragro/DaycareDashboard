using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DaycareDashboard.Models
{
    public class Baby
    {
        public string Id { get; set; }
        public string Name{ get; set; }
        public DateTime BirthDate { get; set; }
        public string ParentId1 { get; set; }
        public string ParentId2 { get; set; }
        public string NannyId { get; set; }
        public string Year { get; set; }
        public List<Activity> ActsLog { get; set; }
    }
}



  
