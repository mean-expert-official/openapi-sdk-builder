import { Account } from "../sdk/models/Account";

describe('Calculator', function() {

  beforeEach(function() {});
  afterEach(function() {});

  it('should return model name by calling Account.getModelName()', function() {
    expect(Account.getModelName()).toBe('Account');
  });

  it('should initialize model through constructor data', function() {
    let instance: Account = new Account({
      id: 1,
      firstName: "string",
      lastName: "string",
      realm: "string",
      username: "string",
      email: "string",
      emailVerified: false,
      createdAt: "string",
      updatedAt: "string",
    });
    expect(instance.id).toBe(1);
    expect(instance.firstName).toBe("string");
    expect(instance.lastName).toBe("string");
    expect(instance.realm).toBe("string");
    expect(instance.username).toBe("string");
    expect(instance.email).toBe("string");
    expect(instance.emailVerified).toBe(false);
    expect(instance.createdAt).toBe("string");
    expect(instance.updatedAt).toBe("string");
  });

  it('should initialize model through factory method', function() {
    let instance: Account = Account.factory({
      id: 1,
      firstName: "string",
      lastName: "string",
      realm: "string",
      username: "string",
      email: "string",
      emailVerified: false,
      createdAt: "string",
      updatedAt: "string",
    });
    expect(instance.id).toBe(1);
    expect(instance.firstName).toBe("string");
    expect(instance.lastName).toBe("string");
    expect(instance.realm).toBe("string");
    expect(instance.username).toBe("string");
    expect(instance.email).toBe("string");
    expect(instance.emailVerified).toBe(false);
    expect(instance.createdAt).toBe("string");
    expect(instance.updatedAt).toBe("string");
  });
});