let userProfile = ["Edward Martin", 30, true, {city: "Philadelphia"}, ["singing", "hiking"]];

console.log(`User Name: ${userProfile[0]}  Second hobby: ${userProfile[4][1]}`);

userProfile[1] = 31;
userProfile[4].push("dancing");

console.log(userProfile);

