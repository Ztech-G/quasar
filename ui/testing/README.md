![Quasar Framework logo](https://cdn.quasar.dev/logo-v2/header.png)

# Quasar Framework UI Testing
<!-- Quasar 框架 UI 测试 -->

> IMPORTANT!
> All commands should be run from `/ui`, not from `/ui/testing`.
<!-- 重要提示！所有命令都应该从 `/ui` 目录运行，而不是从 `/ui/testing` 目录运行。 -->

## Using the Specs script
<!-- 使用 Specs 脚本 -->

### Steps for a new test file
<!-- 创建新测试文件的步骤 -->

1. Ensure that the UI has been built:
<!-- 确保 UI 已经构建完成： -->

```bash
$ pnpm build
```

2. Use the Specs script to generate the draft of the new testing file:
<!-- 使用 Specs 脚本生成新测试文件的草稿： -->

```bash
$ pnpm test:specs --target <target_file>
# "target" refers to the original file upon which a test
# file will be generated here
# "target" 指的是将要为其生成测试文件的原始文件

# Examples:
# 示例：
#   $ pnpm test:specs -t QBtn
#   $ pnpm test:specs -t use-btn
#   $ pnpm test:specs -t composable
```

3. Edit the file, gradually removing the `.todo` suffix from the `test()` calls. Do not leave any `.todo()` or `.skip()` modifiers for all describe/test calls.
<!-- 编辑文件，逐步移除 `test()` 调用中的 `.todo` 后缀。不要在所有 describe/test 调用中留下任何 `.todo()` 或 `.skip()` 修饰符。 -->

4. Should you want to discard a `describe()` or `test()` section, just delete it then call the Specs script again and add an ignore statement:
<!-- 如果你想要丢弃某个 `describe()` 或 `test()` 部分，只需删除它，然后再次调用 Specs 脚本并添加忽略语句： -->

```bash
$ pnpm test:specs --target <target_file>
# ...then select to ignore the missing tests
# ...然后选择忽略缺失的测试
```

5. You might want to also start Vitest to verify what you are writing in the test file:
<!-- 你可能还想启动 Vitest 来验证你在测试文件中编写的内容： -->

```bash
# withOUT Vitest UI:
# 不使用 Vitest UI：
$ pnpm test:watch

# to watch only a specific file pattern
# 只监视特定的文件模式
$ pnpm test:watch "QList"

# with Vitest UI:
# 使用 Vitest UI：
$ pnpm test:watch:ui
```

6. When you are done with the test file, verify that the contents of the test file is OK:
<!-- 当你完成测试文件后，验证测试文件的内容是否正确： -->

```bash
$ pnpm test:specs --target <target_file>
# ...it should not output any errors
# ...它不应该输出任何错误
```

...and that all the tests are passing!
<!-- ...并且所有测试都通过了！ -->

### Steps for adding new sections to a test file
<!-- 为测试文件添加新部分的步骤 -->

So you've added a new prop/method/...etc to a Component/Directive/...etc and you've edited its JSON file (if it has one). This should make the Specs script to output an error that some tests are missing for the respective test file.
<!-- 所以你已经为组件/指令/等添加了新的属性/方法/等，并编辑了它的 JSON 文件（如果有的话）。这应该会使 Specs 脚本输出错误，表明相应测试文件缺少一些测试。 -->

1. Ensure that the UI has been built:
<!-- 确保 UI 已经构建完成： -->

```bash
$ pnpm build
```

2. Run the Specs script so it can generate the missing pieces for you:
<!-- 运行 Specs 脚本，让它为你生成缺失的部分： -->

```bash
$ pnpm test:specs --target <target_file>
# ...and it will prompt you to add
# the missing tests or to add ignore statements
# (and you can handle each of the issues separately)
# ...它会提示你添加缺失的测试或添加忽略语句
# （你可以分别处理每个问题）
```

3. Edit the file, gradually removing the `.todo` suffix from the `test()` calls. Do not leave any `.todo()` or `.skip()` modifiers for all describe/test calls after you finish.
<!-- 编辑文件，逐步移除 `test()` 调用中的 `.todo` 后缀。完成后不要在所有 describe/test 调用中留下任何 `.todo()` 或 `.skip()` 修饰符。 -->

4. You might want to also start Vitest to verify what you are writing in the test file:
<!-- 你可能还想启动 Vitest 来验证你在测试文件中编写的内容： -->

```bash
# withOUT Vitest UI:
# 不使用 Vitest UI：
$ pnpm test:watch

# with Vitest UI:
# 使用 Vitest UI：
$ pnpm test:watch:ui
```

5. After you're done with the test file, verify that the contents of the test file is OK:
<!-- 完成测试文件后，验证测试文件的内容是否正确： -->

```bash
$ pnpm test:specs --target <target_file>
# ...it should not output any errors
# ...它不应该输出任何错误
```

...and that all the tests are passing!
<!-- ...并且所有测试都通过了！ -->

### Steps for re-generating a test file section
<!-- 重新生成测试文件部分的步骤 -->

So you've changed a prop/method/...etc on a Component/Directive/...etc and you've edited its JSON file (if it has one). Now the Specs script will not output any error since no tests are missing in the respective test file. But you can re-generate the test file section(s) where changes need to be made by targeting them:
<!-- 所以你已经更改了组件/指令/等的属性/方法/等，并编辑了它的 JSON 文件（如果有的话）。现在 Specs 脚本不会输出任何错误，因为相应测试文件中没有缺少测试。但你可以通过定位需要更改的测试文件部分来重新生成它们： -->

1. Ensure that the UI has been built:
<!-- 确保 UI 已经构建完成： -->

```bash
$ pnpm build
```

2. Run the Specs script so it can generate the missing pieces for you for each of the sections:
<!-- 运行 Specs 脚本，让它为每个部分生成缺失的片段： -->

```bash
$ pnpm test:specs --target <target_file> --generate <json_root_prop>.<json_subprop>
# ...and it will output how the section should look like
# ...它会输出该部分应该是什么样子

# Examples:
# 示例：
#   $ pnpm test:specs -t QBtn -g props.label
#   $ pnpm test:specs -t QBtn -g events.click
#   $ pnpm test:specs -t QBtn -g "events.update:model-value"
#   $ pnpm test:specs -t QBtn -g methods.click
```

For NON component/directive/plugin files (so composables or other generic js files), there is no JSON (composables may have a JSON but it does not refer to the explicit exported content of the file so it is ignored), but the Specs script can still infer the contents and generate the missing pieces for you:
<!-- 对于非组件/指令/插件文件（如 composables 或其他通用 js 文件），没有 JSON 文件（composables 可能有 JSON 文件，但它不涉及文件的显式导出内容，因此被忽略），但 Specs 脚本仍然可以推断内容并为你生成缺失的片段： -->

```bash
# target the default exporting function
# 定位默认导出函数
$ pnpm test:specs -t set-css-var -g functions.default

# target the default exporting object:
# 定位默认导出对象：
$ pnpm test:specs -t set-css-var -g variables.default

# target the default exporting class:
# 定位默认导出类：
$ pnpm test:specs -t EventBus -g classes.default

# target a named exported variable
# 定位命名导出变量
$ pnpm test:specs -t set-css-var -g variables.useSizeDefaults

# target a named exported class
# 定位命名导出类
$ pnpm test:specs -t set-css-var -g classes.myClassName

# target a named exported function
# 定位命名导出函数
$ pnpm test:specs -t global-nodes -g functions.createGlobalNode
```

3. The content that gets outputted to the terminal is automatically copied to the clipboard. Should you need just a part of it, just copy that part only. Remember to remove the `.todo` modifier from the `test()` calls at the end.
<!-- 输出到终端的内容会自动复制到剪贴板。如果你只需要其中的一部分，只需复制那一部分即可。记住在最后移除 `test()` 调用中的 `.todo` 修饰符。 -->

4. You might want to also start Vitest to verify what you are writing in the test file:
<!-- 你可能还想启动 Vitest 来验证你在测试文件中编写的内容： -->

```bash
# withOUT Vitest UI:
# 不使用 Vitest UI：
$ pnpm test:watch

# with Vitest UI:
# 使用 Vitest UI：
$ pnpm test:watch:ui
```

5. After you're done with the test file, verify that the contents of the test file is OK:
<!-- 完成测试文件后，验证测试文件的内容是否正确： -->

```bash
$ pnpm test:specs --target <target_file>
# ...it should not output any errors
# ...它不应该输出任何错误
```

...and that all the tests are passing!
<!-- ...并且所有测试都通过了！ -->

## Guidelines for testing
<!-- 测试指南 -->

* Keep testing code clean and easily understandable. Add comments if necessary.
<!-- 保持测试代码清洁且易于理解。必要时添加注释。 -->
* Look into the code of what you are testing to decide the best approach for your tests.
<!-- 查看你正在测试的代码，以决定测试的最佳方法。 -->
* Convert tests for multiple values/types of the same thing into an test.each() where it applies. There are lots of examples in the already existing test files.
<!-- 将对同一事物的多个值/类型的测试转换为 test.each()（如果适用）。在现有测试文件中有很多示例。 -->
* Watch for `$computedStyle()` calls as these get cached, so you only get one chance per node to get the expected result. Usually leave this as the last expect() call.
<!-- 注意 `$computedStyle()` 调用，因为这些会被缓存，所以每个节点只有一次机会获得预期结果。通常将其作为最后一个 expect() 调用。 -->
* Test the effect while not duplicating the implementation of what you are testing. Where you can, use `$computedStyle()`.
<!-- 测试效果，同时不要重复你正在测试的实现。在可能的情况下，使用 `$computedStyle()`。 -->
* Be aware of the common formulas (below).
<!-- 了解常见的公式（见下文）。 -->
* There are some custom matchers that you can use (`$any`, `$arrayValues`, `$objectValues`, `$ref`, `$reactive`) and also some extra @vue/test-utils mount() additions (`$style`, `$computedStyle`): [code](https://github.com/quasarframework/quasar/blob/dev/ui/testing/setup.js)
<!-- 有一些自定义匹配器可以使用（`$any`、`$arrayValues`、`$objectValues`、`$ref`、`$reactive`），还有一些额外的 @vue/test-utils mount() 扩展（`$style`、`$computedStyle`）：[代码](https://github.com/quasarframework/quasar/blob/dev/ui/testing/setup.js) -->
* Use of Copilot when writing the tests is allowed ;)
<!-- 编写测试时允许使用 Copilot ;) -->

Important reading list:
<!-- 重要阅读清单： -->
* https://vitest.dev/api/expect.html
* https://test-utils.vuejs.org/api/
* https://vitest.dev/api/
* https://vitest.dev/api/vi.html

## Common formulas for writing tests
<!-- 编写测试的常见公式 -->

> When instructed to search for something, do it in /ui/src/**/*.test.js files.
<!-- 当被指示搜索某些内容时，请在 /ui/src/**/*.test.js 文件中进行搜索。 -->

| Need | Formula |
| --- | --- |
| Use Vue Router | Search for `getRouter` |
<!-- 使用 Vue Router | 搜索 `getRouter` -->
| Testing Vue Router props | Search for `[(prop)to]` or `[(prop)active-class]`. Example: QBreadcrumbsEl.test.js |
<!-- 测试 Vue Router 属性 | 搜索 `[(prop)to]` 或 `[(prop)active-class]`。示例：QBreadcrumbsEl.test.js -->
| Testing color/text-color props | Search for `[(prop)color]` and `[(prop)text-color]`. Example: QBtn.test.js |
<!-- 测试 color/text-color 属性 | 搜索 `[(prop)color]` 和 `[(prop)text-color]`。示例：QBtn.test.js -->
| Speed up timers | Search for `useFakeTimers()` |
<!-- 加速计时器 | 搜索 `useFakeTimers()` -->

## Changing the Specs script code
<!-- 更改 Specs 脚本代码 -->

If you change the specs script code, then you need to test it:
<!-- 如果你更改了 specs 脚本代码，那么你需要测试它： -->

```bash
# we first build the UI:
# 我们首先构建 UI：
$ pnpm build

# then we do a dry-run test:
# 然后我们进行干运行测试：
$ pnpm test:specs --dry-run
# ...it should not output any errors
# ...它不应该输出任何错误

# also do a test for existing files:
# 还要对现有文件进行测试：
$ pnpm test:specs:ci
# ...it should not output any errors
# ...它不应该输出任何错误
```

## License
<!-- 许可证 -->

Copyright (c) 2015-present Razvan Stoenescu

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
