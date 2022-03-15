# 一个简单的富文本编辑器（开发中）

项目基于React App构建

## 运行方式

在项目目录，通过下方命令可以执行：

```
npm run start
```

在浏览器中访问http://localhost:3000 访问项目。

## 代码目录

```
stark-editor
│   README.md
│   tsconfig.json    
└───src
│   │   index.tsx
│   │   .gitignore
│   └───common
│       │   util.ts
│       │   
│   └───view
│       │   StarkEditor.tsx
│       │       └───editor
│       │       │       │       Editor.tsx
│       │       │       │       editor.css
│   └───model
│       └───delta
│       │     delta.ts
│       └───struct
│       │     base_property.ts
│       │     define.ts
│       │     font_property.ts
│       │     text_property.ts
│       │     text_range.ts
│       └───text_stream
│       │     text_stream.ts
│   
└───public
    │   index.html
```

common：常用工具类

view：编辑器视图层

model：编辑器数据层

## 更新日志

### 3.15

- 新增deleteText接口

```typescript
/**
 * 删除文字
 * @param textRange 删除范围
 * @param id 当前文字ID
 */
deleteText(id, range);

test('deleteText', () => {
    // origin text: 你不好吗
 model.deleteText(id, new TextRange(0, 1));
 expect(model.text).toBe('不好吗');
});
```

## RoadMap

// todo

## 联系方式

// todo
