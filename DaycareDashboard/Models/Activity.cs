﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DaycareDashboard.Models
{
    public class Activity
    {
        public int ActId { get; set; }
        public DateTime CreateDate { get; set; }
        public string Time { get; set; }
        public ActivityType Type { get; set; }
        public string  Remark { get; set; }
        public string Id { get; set; }//babyId
    }

    public class AvailableActivity
    {
        public ActivityType ActType { get; set; }
        public bool isEnabled { get; set; }
        
    }


}
