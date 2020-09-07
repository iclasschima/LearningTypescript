const loginUser = require("./index")
const User = require("./class")

const name = loginUser("iclasschima", "iclaschima123", "web")

    
test('should ', () => {
    expect(name.message).toBe("user does not exist")
})

let s = undefined
test('test fo null', () => {
     expect(s).toBeUndefined()
})

const iclass = new User()

test('should be null', () => {
    iclass.age = 12
    iclass.setName("chima")
    expect(iclass.name).toBe("chima")

    expect(iclass.age).toBe(12)
})
