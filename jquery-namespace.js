(function ($) {
		
	var namespace = function () {

		var _namespace = function (selector, context) {

			if (!(this instanceof _namespace)) {
				return new _namespace(selector,context);
			}

			$(selector, context).each(
				(function (obj) {
					return function (_, value) { obj.push(value); };
				})(this)
			);

			return this;
		};

		_namespace.fn = _namespace.prototype;

		_namespace.fn.constructor = _namespace;
		
		_namespace.fn.length = 0;
		_namespace.fn.push = [].push;
		_namespace.fn.splice = [].splice;
	
		_namespace.fn.eq = function (index) {
			return new this.constructor($(this).eq(index));
		};

		_namespace.fn.get = function (index) {
			return $(this).get(index);
		};

		
		return _namespace;
	};
	
	$.namespace = namespace;

})(jQuery);