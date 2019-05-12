
/*global workouts*/

const WARMUP = 'Warmup walk';
const COOLDOWN = 'Cooldown walk';
const WALK = 'Walking';
const RUN = 'Jogging';

workouts = [
	{
		week: 1,
		day: 1,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then alternate 60 secs jogging with 90 secs walking."
	},
	{
		week: 1,
		day: 2,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then alternate 60 secs jogging with 90 secs walking."
	},
	{
		week: 1,
		day: 3,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 60, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then alternate 60 secs jogging with 90 secs walking."
	},
	{
		week: 2,
		day: 1,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then alternate 90 secs jogging with 2 mins walking."
	},
	{
		week: 2,
		day: 2,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then alternate 90 secs jogging with 2 mins walking."
	},
	{
		week: 2,
		day: 3,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 120, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then alternate 90 secs jogging with 2 mins walking."
	},
	{
		week: 3,
		day: 1,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 180, label: RUN, vibrate: {} },
			{ time: 180, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 180, label: RUN, vibrate: {} },
			{ time: 180, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then do two repetitions of: Jog for 90 secs; Walk for 90 secs; Jog for 3 mins; Walk for 3 mins."
	},
	{
		week: 3,
		day: 2,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 180, label: RUN, vibrate: {} },
			{ time: 180, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 180, label: RUN, vibrate: {} },
			{ time: 180, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then do two repetitions of: Jog for 90 secs; Walk for 90 secs; Jog for 3 mins; Walk for 3 mins."
	},
	{
		week: 3,
		day: 3,
		phases: [
			{ time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 180, label: RUN, vibrate: {} },
			{ time: 180, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 90, label: RUN, vibrate: {} },
			{ time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
			{ time: 180, label: RUN, vibrate: {} },
			{ time: 180, label: WALK, vibrate: {} },
			{ time: 300, label: COOLDOWN, vibrate: {} },
		],
		description: "Brisk 5 min warmup walk, then do two repetitions of: Jog for 90 secs; Walk for 90 secs; Jog for 3 mins; Walk for 3 mins."
	},
	{
		week: 4,
		day: 1,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 180, label: RUN, vibrate: {} },
		    { time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 150, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 180, label: RUN, vibrate: {} },
		    { time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then: Jog 3 mins; Walk 90 secs; Jog 5 mins; Walk 2.5 mins; Jog 3 mins; Walk 90 secs; Jog 5 mins"
	},
	{
		week: 4,
		day: 2,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 180, label: RUN, vibrate: {} },
		    { time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 150, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 180, label: RUN, vibrate: {} },
		    { time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then: Jog 3 mins; Walk 90 secs; Jog 5 mins; Walk 2.5 mins; Jog 3 mins; Walk 90 secs; Jog 5 mins"
	},
	{
		week: 4,
		day: 3,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 180, label: RUN, vibrate: {} },
		    { time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 150, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 180, label: RUN, vibrate: {} },
		    { time: 90, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then: Jog 3 mins; Walk 90 secs; Jog 5 mins; Walk 2.5 mins; Jog 3 mins; Walk 90 secs; Jog 5 mins"
	},
	{
		week: 5,
		day: 1,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 180, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 180, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then: Jog for 5 minutes; Walk for 3 minutes; Jog for 5 minutes; Walk for 3 minutes; Jog for 5 minutes"
	},
	{
		week: 5,
		day: 2,
		phases: [
            { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
            	{ time: 480, label: RUN, vibrate: {} },
            	{ time: 300, label: WALK, vibrate: { lastFiveSecs: true } },
            	{ time: 480, label: RUN, vibrate: {} },
            	{ time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then: Jog for 1.2km (8 mins); Walk 800m (5 mins); Jog 1.2km (8 mins)"
	},
	{
		week: 5,
		day: 3,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 1200, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then jog 3.2km (20 mins) with no walking"
	},
	{
		week: 6,
		day: 1,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 180, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 480, label: RUN, vibrate: {} },
		    { time: 180, label: WALK, vibrate: { lastFiveSecs: true } },
		    { time: 300, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then: Jog for 5 minutes; Walk for 3 minutes; Jog for 8 minutes; Walk for 3 minutes; Jog for 5 minutes"
	},
	{
		week: 6,
		day: 2,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 600, label: RUN, vibrate: {} },
		    { time: 180, label: RUN, vibrate: {} },
		    { time: 600, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then: Jog 1.6km (10 mins); Walk 400m (3 mins); Jog 1.6km (10mins)"
	},
	{
		week: 6,
		day: 3,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 1320, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then jog 3.6km (22 mins) with no walking"
	},
	{
		week: 7,
		day: 1,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 1500, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then jog 4km (25 mins)"
	},
	{
		week: 7,
		day: 2,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 1500, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then jog 4km (25 mins)"
	},
	{
		week: 7,
		day: 3,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 1500, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then jog 4km (25 mins)"
	},
	{
		week: 8,
		day: 1,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 1680, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then jog 4.4km (28 mins)"
	},
	{
		week: 8,
		day: 2,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 1680, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then jog 4.4km (28 mins)"
	},
	{
		week: 8,
		day: 3,
		phases: [
		    { time: 300, label: WARMUP, vibrate: { lastFiveSecs: true } },
		    { time: 1800, label: RUN, vibrate: {} },
		    { time: 300, label: COOLDOWN, vibrate: {} }
		],
		description: "Brisk 5 min warmup walk, then jog 5km (30 mins)"
	}
];