using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DaycareDashboard.Models
{
    public class Activity
    {
        public DateTime Time { get; set; }
        public ActivityType Type { get; set; }
        public string  Remark { get; set; }
        public string BabyID { get; set; }
    }

    
}
