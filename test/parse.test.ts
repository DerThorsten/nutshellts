import { parse } from '../src/index'

test('parse', () => {
    const ast_obj = parse('echo "hello"')
    console.log(ast_obj)

    expect(ast_obj).toHaveProperty("type")
    expect(ast_obj.type).toBe('Script')

    expect(ast_obj).toHaveProperty("commands")
    expect(ast_obj.commands).toHaveLength(1)

    const command = ast_obj.commands[0]
    expect(command).toHaveProperty("type")
    expect(command.type).toBe('Command')
    expect(command).toHaveProperty("name")
    expect(command.name).toBeInstanceOf(Object)
    expect(command).toHaveProperty("suffix")
    expect(command.suffix).toBeInstanceOf(Array)

    const name = command.name
    const suffix = command.suffix
    console.log(suffix)
    expect(name).toHaveProperty("type")
    expect(name.type).toBe('Word')
    expect(name).toHaveProperty("text")
    expect(name.text).toBe('echo')

    expect(suffix).toHaveLength(1)
    const suffix0 = suffix[0]
    expect(suffix0).toHaveProperty("type")
    expect(suffix0.type).toBe('Word')
    expect(suffix0).toHaveProperty("text")
    expect(suffix0.text).toBe('hello')
})

