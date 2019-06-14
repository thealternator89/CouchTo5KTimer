
/*global workouts*/

const WARMUP = 'Brisk warmup walk';
const COOLDOWN = 'Cooldown walk';
const WALKING = 'Walking';
const JOGGING = 'Jogging';

const VIBRATE_NEVER = {};
const VIBRATE_LAST_FIVE_SECS = { lastFiveSecs: true };

function duration(mins, secs) {
	secs = secs || 0;
	return (mins * 60) + secs;
}

workouts = [
	{
		week: 1,
		day: 1,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then alternate 60 secs jogging with 90 secs walking for 20 mins.",
		complete: "Congratulations!<br>You've started on your journey to running 5K!"
	},
	{
		week: 1,
		day: 2,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then alternate 60 secs jogging with 90 secs walking for 20 mins.",
		complete: "Keep it up!<br>You've just completed day 2!"
	},
	{
		week: 1,
		day: 3,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then alternate 60 secs jogging with 90 secs walking for 20 mins.",
		complete: "Congratulations, you've completed week one!<br>Keep it up!"
	},
	{
		week: 2,
		day: 1,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then alternate 90 secs jogging with 2 mins walking for 20 mins.",
		complete: "You're over the hurdle, week 2 here we go!"
	},
	{
		week: 2,
		day: 2,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then alternate 90 secs jogging with 2 mins walking for 20 mins.",
		complete: "Keep on going! You're halfway through Week 2!"
	},
	{
		week: 2,
		day: 3,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(2), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then alternate 90 secs jogging with 2 mins walking for 20 mins.",
		complete: "Congratulations, you've completed week two!<br>Keep it up!"
	},
	{
		week: 3,
		day: 1,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(3), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(3), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then do two repetitions of: Jog for 90 secs; Walk for 90 secs; Jog for 3 mins; Walk for 3 mins.",
		complete: "You're into week 3! Do you feel yourself making progress!?"
	},
	{
		week: 3,
		day: 2,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(3), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(3), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then do two repetitions of: Jog for 90 secs; Walk for 90 secs; Jog for 3 mins; Walk for 3 mins.",
		complete: ""
	},
	{
		week: 3,
		day: 3,
		phases: [
			{ time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(3), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(1, 30), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
			{ time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
			{ time: duration(3), label: WALKING, vibrate: VIBRATE_NEVER },
			{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER },
		],
		description: "Brisk 5 min warmup walk, then do two repetitions of: Jog for 90 secs; Walk for 90 secs; Jog for 3 mins; Walk for 3 mins.",
		complete: "Congratulations, you've completed week three!<br>Keep it up!"
	},
	{
		week: 4,
		day: 1,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(2, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then: Jog 3 mins; Walk 90 secs; Jog 5 mins; Walk 2.5 mins; Jog 3 mins; Walk 90 secs; Jog 5 mins",
		complete: ""
	},
	{
		week: 4,
		day: 2,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(2, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then: Jog 3 mins; Walk 90 secs; Jog 5 mins; Walk 2.5 mins; Jog 3 mins; Walk 90 secs; Jog 5 mins",
		complete: ""
	},
	{
		week: 4,
		day: 3,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(2, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(1, 30), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then: Jog 3 mins; Walk 90 secs; Jog 5 mins; Walk 2.5 mins; Jog 3 mins; Walk 90 secs; Jog 5 mins",
		complete: "Congratulations, you've completed week four!<br>Keep it up! You're halfway there!"
	},
	{
		week: 5,
		day: 1,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(3), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(3), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then: Jog for 5 mins; Walk for 3 mins; Jog for 5 mins; Walk for 3 mins; Jog for 5 mins",
		complete: ""
	},
	{
		week: 5,
		day: 2,
		phases: [
            { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
            	{ time: duration(8), label: JOGGING, vibrate: VIBRATE_NEVER },
            	{ time: duration(5), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
            	{ time: duration(8), label: JOGGING, vibrate: VIBRATE_NEVER },
            	{ time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then: Jog for 1.2km (8 mins); Walk 800m (5 mins); Jog 1.2km (8 mins)",
		complete: ""
	},
	{
		week: 5,
		day: 3,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(20), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then jog 3.2km (20 mins) with no walking",
		complete: "Congratulations, you've completed week five!<br>Keep it up!"
	},
	{
		week: 6,
		day: 1,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(3), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(8), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(3), label: WALKING, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(5), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then: Jog for 5 mins; Walk for 3 mins; Jog for 8 mins; Walk for 3 mins; Jog for 5 mins",
		complete: ""
	},
	{
		week: 6,
		day: 2,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(10), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(3), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(10), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then: Jog 1.6km (10 mins); Walk 400m (3 mins); Jog 1.6km (10mins)",
		complete: ""
	},
	{
		week: 6,
		day: 3,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(22), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then jog 3.6km (22 mins) with no walking",
		complete: "Congratulations, you've completed week six!<br>Keep it up! Only two weeks to go!"
	},
	{
		week: 7,
		day: 1,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(25), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then jog 4km (25 mins)",
		complete: ""
	},
	{
		week: 7,
		day: 2,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(25), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then jog 4km (25 mins)",
		complete: ""
	},
	{
		week: 7,
		day: 3,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(25), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then jog 4km (25 mins)",
		complete: "Congratulations, you've completed week seven!<br>One week to go!"
	},
	{
		week: 8,
		day: 1,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(28), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then jog 4.4km (28 mins)",
		complete: ""
	},
	{
		week: 8,
		day: 2,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(28), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then jog 4.4km (28 mins)",
		complete: ""
	},
	{
		week: 8,
		day: 3,
		phases: [
		    { time: duration(5), label: WARMUP, vibrate: VIBRATE_LAST_FIVE_SECS },
		    { time: duration(30), label: JOGGING, vibrate: VIBRATE_NEVER },
		    { time: duration(5), label: COOLDOWN, vibrate: VIBRATE_NEVER }
		],
		description: "Brisk 5 min warmup walk, then jog 5km (30 mins)",
		complete: "Congratulations!<br>You've completed the Couch to 5K program!"
	}
];