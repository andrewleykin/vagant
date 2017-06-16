> ДЗ №1

# Учебная сборка Loftschool


### Работы выполнил : Лейкин Андрей
>Курс "Продвинутый Веб" 06.2017
>Наставник : Александр Собакарь

>Описание Работы

- Клонирован репозиторий [loftschool/gulp-builder-dz1]
- Установлены плагины из файла манифеста `package.json`
- Проверена работоспособность `gulp`
- Созданы каталоги
```bash
mkdir source/{fonts,sprite}
```
- Созданы файлы
```bash
touch gulp/tasks/{sprite.create.js,copy.fonts.js}
```
- Установлен плагин [gulp.spritesmith] для создания `.png` и `.gif` спрайтов
```bash
npm i -D gulp.spritesmith
```
- Установлен плагин [merge-stream]
```bash
npm i -D merge-stream
```
- Для создания `.png` спрайтов следующий код добавлен в файлы `sprite.create.js` и `gulpfile.js`:

sprite.create.js
```js
'use strict';

module.exports = function () {
	$.gulp.task('sprite:create', function () {
	  var spriteData = $.gulp.src('source/sprite/*.{png,gif}')
		.pipe($.gp.spritesmith({
			imgName: 'sprite.png',	// имя картинки
			cssName: 'sprite.scss',	// имя файла стилей
	  		algorithm: 'left-right',
      			padding: 20
	  	}));
	
	  // Прописываем путь для картинки
	  var imgStream = spriteData.img
		.pipe($.gulp.dest($.config.root + '/assets/img'));
		
	  // Прописываем путь для файла стилей
	  var cssStream = spriteData.css
		.pipe($.gulp.dest('./source/style/common'));
	 
	  // Возвращаем две переменные
	  return $.merge(imgStream, cssStream);
	});
};

```

gulpfile.js
```js
global.$ = {
  merge: require('merge-stream')
};
```

- Для копирования шрифтов следующий код добавлен в файл `copy.fonts.js`:

copy.fonts.js
```js
'use strict';

module.exports = function () {
	$.gulp.task('copy:fonts', function() {
    return $.gulp.src('./source/fonts/**/*.*', { since: $.gulp.lastRun('copy:fonts') }) // копируем только вновь добавленные шрифты
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};
```

- В массив в файле`tasks.js` добавлены следующие элементы

tasks.js

```js
module.exports = [
  './gulp/tasks/copy.fonts.js',
  './gulp/tasks/sprite.create.js'
];
```

- В задачу по умолчанию в файле `gulpfile.js` добавлены дополнительные задачи создания спрайтов и копирования

gulpfile.js
```js
$.gulp.task('default', $.gulp.series(
  'clean',
  'sprite:create',
  $.gulp.parallel(
    'copy:fonts'
  )
));
```

- Для автоматического выполнения новых задач были внесены изменения в файл `watch.js`

watch.js
```js
module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/sprite/**/*.{png,gif}', $.gulp.series('sprite:create'));
    $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('copy:fonts'));
  });
};
```
- Отредактирован файл `README.md`
- Выполнен commit всех изменений
- Создан новый репозиторий на GitHub [andrewleykin/my-builder]
- Файлы отправлены на GitHub [andrewleykin/my-builder] в мой репозиторий




> Сборка работает на gulp версии 4.0. 
#### Для начала работы

1. ```clone this repo```
2. ```cd path/to/...```
3. ```npm install gulpjs/gulp-cli -g```  
> Установка последней версии Gulp CLI tools глобально (подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

4. ```npm install```
6. ```run gulp``` 

