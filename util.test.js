const loginUser = require("./index")

const name = loginUser("iclasschima", "iclaschima123", "web")

    
test('should ', () => {
    expect(name.message).toBe("user does not exist")
})

let s = undefined
test('test fo null', () => {
     expect(s).toBeUndefined()
})
