'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Callcenter Agent Schema
 */
var CallcenterAgentSchema = new Schema({
	name:{
		type:String
	},	 
	type:{
		type:String,
		default:'callback'
	}, 
	call_timeout:{
		type:Number,
		default:10
	},
	contact:{
		type:String
	},	 
	status:{
		type:String,
		default:'Logged Out'
	}, 
	'max-no-answer':{
		type:Number
	},	 
	'wrap-up-time':{
		type:Number,
		default:0
	},	 
	'reject-delay-time':{
		type:Number
	},	 
	'busy-delay-time':{
		type:Number
	},	 
	'no-answer-delay-time':{
		type:String
	},
	tiers:[
		{
			type:Schema.ObjectId, ref:'CallcenterTier'
		}
	],
	tenant: {
		type:Schema.ObjectId, ref:'Tenant' //visibility
	}
},{collection:'call_center_agents'});

//Post middleware

// CallcenterAgentSchema.post('remove', function (agent) {
// 	CallcenterTier.findOneAndRemove({agent:agent.id});
// })

mongoose.model('CallcenterAgent', CallcenterAgentSchema);