// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error
let fetchUserData = function(userId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User${userId}`,
                    email: `${userId}@gmail.com`,
                    registrationDate: new Date().toISOString()
                })
            } else {
                reject(new Error("Invalid User ID: must be a positive number"))
            }
        }, 1500);
    })
}
console.log(fetchUserData(5));
// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain
let getUserAndPosts = (userId) => {
    return fetchUserData(userId)
        .then(user => {
            return fetchUserPosts(user.id)
                .then(posts => {
                    return {...user, posts}
                    // return {user, posts} dont need dots apparently
                })
        })
        .catch(e => {
            console.error(`Error in promises chain: ${e.Promise}`);
            return null;
        })
}
getUserAndPosts(2);
// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data
async function getUserDataAsync(userId) {
    try {
        console.log(`Fetching user data for ID: ${userId}`);
        let user = await fetchUserData (userId);
        console.log(`User Data received: ${user}`);

        console.log(`Fetching posts for user ${userId}`);
        let posts = await fetchUserPosts(user.id);
        console.log(`Posts received: ${posts}`);

        return {...user, posts}
    } catch (e) {
        console.error(`Error in async operation ${e.message}`);
        return null;
    }
}
// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users
async function  fetchMulipleUsers(userIds){
try{
    console.log(`Starting parallel user fetches`);
    let Promises = userIds.map(id => fetchUserData(id));
    let user = await Promise.all(Promises);
    console.log(`successfully fetched ${userIds.lenth} users`);
    return users;
}catch(e) {
    console.error(`Error in fetching multiple users: ${e,message}`);
    return []; 
  }
}
// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately
async function fetchUserAndPosts(userIds){
    try{
        console.log("fetching users & posts");

        let users = await fetchMulipleUsers(userIds);

        let usersPostPromises = users.map(userIds => fetchUserAndPosts(user.id))
          .then(posts => ({user,post}))
          .catch(e => {
            console.error(`Error fetching posts user ${user.id}: ${e.message}`);
            return {...user,post: []};
          });
          let usersWithPosts = await Promise.all(userPostPromises)
          return userPostPromises;
    }catch(e) {
        console.error(`Error in fetchUserAndPosts: ${emessage}`);
    }
}
// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling
async function runTests() {
    try {
        // Test 01: Fetch single user
        console.log("Test 01: Fetching single user data");
        let userData = await getUserDataAsync(1);
        console.log(`Single user data: ${userData}`);
        // Test 02: Fetch multiple users
        console.log("Test 02: Fetching multiple users' data");
        let multipleUsers = await fetchMultipleUsers([1, 2, 3]);
        console.log(`Multiple users result: ${multipleUsers}`);
        // Test 03: Users with posts
        console.log("Test 03: Fetching users with their posts");
        let fetchUsersWithPosts = await fetchUsersAndPosts([1, 2]);
        console.log(`Users with posts result: ${fetchUsersWithPosts}`);
        // Test 04: Error Handling
        console.log("\n Test 4: Testing error handling");
        let errorHandling = await getUserDataAsync(-1);
        console.error(`Error occured: ${errorHandling}`);
    } catch (e) {
        console.error(`Test suite error: ${e.message}`);
    }
}
// Run the tests
runTests();

Reply










