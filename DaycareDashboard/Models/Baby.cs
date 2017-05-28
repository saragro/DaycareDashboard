using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DaycareDashboard.Models
{
    public class Baby
    {
        public string ID { get; set; }
        public string Name{ get; set; }
        public DateTime BirthDate { get; set; }
        public string ParentID1 { get; set; }
        public string ParentID2 { get; set; }
        public string NannyID { get; set; }
        public string Year { get; set; }
        public List<Activity> BabyActivities { get; set; }
    }
}



  
