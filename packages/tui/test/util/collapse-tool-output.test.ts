import { expect, test } from "bun:test"
import { commandComments } from "../../src/util/collapse-tool-output"

test("commandComments keeps every #-starting line, wherever it is", () => {
  expect(commandComments("# list files\nls -la\n  # then count\nwc -l x")).toBe("# list files\n  # then count")
})

test("commandComments returns undefined when nothing would be hidden", () => {
  expect(commandComments("ls -la")).toBeUndefined()
  expect(commandComments("# only a comment")).toBeUndefined()
})
