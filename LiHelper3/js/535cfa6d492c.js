(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.app = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i = this,
            j = "function",
            k = c.helperMissing,
            l = void 0,
            m = this.escapeExpression;
        f += "<div class=\"row\">\n    <div id=\"sidebar\" class=\"span3\">\n        <ul id=\"lists\" class=\"unstyled\">\n            <li><a href=\"/feed\" class=\"list-link\" data-link=\"push\"><i class=\"icon icon-feed\"></i>Feed</a></li>\n            <div id=\"system-lists\"></div>\n            <li class=\"list list-read-later\"><a href=\"/";
        h = c.user;
        g = h || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "user.username", {
            hash: {}
        });
        f += m(g) + "/read-later\" class=\"list-link type-read-later\"  data-list-slug=\"read-later\" data-link=\"push\"><i class=\"icon icon-read-later\"></i>Read Later</a></li>\n            <li class=\"list list-starred\"><a href=\"/";
        h = c.user;
        g = h || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "user.username", {
            hash: {}
        });
        f += m(g) + "/starred\" class=\"list-link type-starred\" data-list-slug=\"starred\" data-link=\"push\"><i class=\"icon icon-star\"></i>Starred</a></li>\n            <li class=\"list list-all\"><a href=\"/";
        h = c.user;
        g = h || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "user.username", {
            hash: {}
        });
        f += m(g) + "/all\" class=\"list-link type-all\" data-list-slug=\"all\" data-link=\"push\"><i class=\"icon icon-all\"></i>All Clips</a></li>\n            <div id=\"user-lists\" >\n                \n            </div>\n            <div id=\"new_list\">\n                <a href=\"\" class=\"add-list\">+ New list</a>\n            </li>\n        </ul>\n    </div>\n    \n    <div class=\"main span9\">\n        <div id=\"feed\"></div>\n        <div id=\"clips\"></div>\n        \n        <footer>\n            <!--<a href=\"/?flavour=mobile/\">Mobile site</a>-->\n            <a href=\"/tools/\">Tools</a>\n            <a href=\"/developers/\">Developers</a>\n            <a href=\"/about/\">About</a>\n            <a href=\"/privacy/\">Privacy</a>\n            <a href=\"http://blog.kippt.com/\">Blog</a>\n            <a href=\"http://twitter.com/kippt\" target=\"_blank\">@kippt</a>\n        </footer>\n    </div>\n    \n</div>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.profile = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i = this,
            j = "function",
            k = c.helperMissing,
            l = void 0,
            m = this.escapeExpression;
        f += "<div class=\"row\">\n    <div class=\"span3 columns\" class=\"sidebar\">\n        <div class=\"picture\" style=\"background-image: url(";
        h = c.avatar_url;
        g = h || b.avatar_url;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "avatar_url", {
            hash: {}
        });
        f += m(g) + "); height: 160px; width: 160px;\"></div>\n        <h2>";
        h = c.username;
        g = h || b.username;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "username", {
            hash: {}
        });
        f += m(g) + "</h2>\n        <ul class=\"lists\" class=\"unstyled\">\n        </ul>\n    </div>\n    \n    <div class=\"span9 columns main\">\n        <div class=\"clips\"></div>\n    </div>\n</div>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.not_found = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f, g = this;
        return "<div class=\"row\">\n    <div class=\"main span12 columns\">\n        <div class=\"padding page\">\n            <h1>404 Not Found</h1>\n            \n        </div>\n    </div>\n</div>";
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.list_edit_modal = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k = this,
            l = "function",
            m = c.helperMissing,
            n = void 0,
            o = this.escapeExpression;

        function p(a, b) {
            return "Edit list";
        }
        function q(a, b) {
            return "Create a new list";
        }
        function r(a, b) {
            return "checked=\"checked\"";
        }
        function s(a, b) {
            return "checked=\"checked\"";
        }
        function t(a, b) {
            return "Save";
        }
        function u(a, b) {
            return "Create";
        }
        f += "<div class=\"kippt-modal\">\n    <div class=\"overlay\">\n        <div class=\"content\">\n            <a href=\"#\" class=\"close\">&times;</a>\n            \n            <h2>";
        i = c.title;
        g = i || b.title;
        h = c['if'];
        j = k.program(1, p, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.program(3, q, e);
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "</h2>\n            \n            <form class=\"invite\">\n                <label for=\"list-create-name\"><strong>List name</strong></label>\n                <input type=\"text\" id=\"list-create-name\" placeholder=\"eg. Programming\" value=\"";
        i = c.title;
        g = i || b.title;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "title", {
            hash: {}
        });
        f += o(g) + "\"/>\n                \n                <label for=\"list-create-description\"><strong>Description</strong> (optional)</label>\n                <textarea id=\"list-create-description\">";
        i = c.description;
        g = i || b.description;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "description", {
            hash: {}
        });
        f += o(g) + "</textarea>\n                \n                <div class=\"controls\">\n                    <label class=\"radio\" for=\"list-create-privacy-public\">\n                        <input type=\"radio\" id=\"list-create-privacy-public\" name=\"list-sharing\" value=\"public\" ";
        i = c.is_private;
        g = i || b.is_private;
        h = c.unless;
        j = k.program(5, r, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "><strong>Public</strong><br>Anyone can view clips and comments\n                    </label>\n                    <label class=\"radio\" for=\"list-create-privacy-private\">\n                        <input type=\"radio\" id=\"list-create-privacy-private\" name=\"list-sharing\" value=\"private\" ";
        i = c.is_private;
        g = i || b.is_private;
        h = c['if'];
        j = k.program(7, s, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "><strong>Private</strong> <i class=\"icon icon-lock\"></i> <br>Only collaborators can view\n                    </label>\n                </div>\n                \n                <div class=\"actions\">\n                    <input type=\"submit\" value=\"";
        i = c.title;
        g = i || b.title;
        h = c['if'];
        j = k.program(9, t, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.program(11, u, e);
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += " list\" class=\"btn btn-green\">\n                    <input type=\"reset\" value=\"Cancel\" class=\"cancel btn btn-white\">\n                </div>\n                <div class=\"error\"></div>\n            </form>\n        </div>\n    </div>\n</div>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.clip_item = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k, l = this,
            m = "function",
            n = c.helperMissing,
            o = void 0,
            p = this.escapeExpression;

        function q(a, b) {
            var d = "",
                e;
            d += "\n                <i class=\"fav\" style=\"background-image:url('";
            j = c.favicon_url;
            e = j || a.favicon_url;
            if (typeof e === m) e = e.call(a, {
                hash: {}
            });
            else if (e === o) e = n.call(a, "favicon_url", {
                hash: {}
            });
            d += p(e) + "');\"></i>\n                ";
            return d;
        }
        function r(a, b) {
            return "\n                <i class=\"fav\"></i>\n            ";
        }
        function s(a, b) {
            var d = "",
                e;
            d += "<span>";
            j = c.url_domain;
            e = j || a.url_domain;
            if (typeof e === m) e = e.call(a, {
                hash: {}
            });
            else if (e === o) e = n.call(a, "url_domain", {
                hash: {}
            });
            d += p(e) + "</span>";
            return d;
        }
        function t(a, b) {
            var d = "",
                e;
            d += "<span title=\"List\" class=\"list\">";
            j = c.list;
            e = j || a.list;
            e = (e === null || e === undefined || e === false ? e : e.title);
            if (typeof e === m) e = e.call(a, {
                hash: {}
            });
            else if (e === o) e = n.call(a, "list.title", {
                hash: {}
            });
            d += p(e) + "</span>";
            return d;
        }
        function u(a, b) {
            var d = "",
                e;
            d += " &#155; ";
            j = c.fromUser;
            e = j || a.fromUser;
            e = (e === null || e === undefined || e === false ? e : e.username);
            if (typeof e === m) e = e.call(a, {
                hash: {}
            });
            else if (e === o) e = n.call(a, "fromUser.username", {
                hash: {}
            });
            d += p(e) + "</span>";
            return d;
        }
        function v(a, b) {
            var d = "",
                e, f;
            d += "\n                &middot; <span class=\"comment-count\"><a href=\"\" title=\"Comment\"><i class=\"icon icon-comment\"></i>";
            j = c.comments;
            e = j || a.comments;
            e = (e === null || e === undefined || e === false ? e : e.count);
            f = c['if'];
            k = l.program(12, w, b);
            k.hash = {};
            k.fn = k;
            k.inverse = l.program(14, x, b);
            e = f.call(a, e, k);
            if (e || e === 0) d += e;
            d += "</a></span>\n            ";
            return d;
        }
        function w(a, b) {
            var d = "",
                e, f;
            d += "<strong>";
            j = c.comments;
            e = j || a.comments;
            e = (e === null || e === undefined || e === false ? e : e.count);
            if (typeof e === m) e = e.call(a, {
                hash: {}
            });
            else if (e === o) e = n.call(a, "comments.count", {
                hash: {}
            });
            d += p(e) + "</strong> Comment";
            j = c.comments;
            e = j || a.comments;
            e = (e === null || e === undefined || e === false ? e : e.count);
            j = c.pluralize;
            f = j || a.pluralize;
            if (typeof f === m) e = f.call(a, e, {
                hash: {}
            });
            else if (f === o) e = n.call(a, "pluralize", e, {
                hash: {}
            });
            else e = f;
            d += p(e);
            return d;
        }
        function x(a, b) {
            return "Comment";
        }
        function y(a, b) {
            return "\n                &middot; <span class=\"comment-count\"><a href=\"\" title=\"Comment\"><i class=\"icon icon-comment\"></i>Add comment</a></span>\n            ";
        }
        function z(a, b) {
            return "liked";
        }
        function A(a, b) {
            return "isOwn";
        }
        function B(a, b) {
            return "rel=\"tooltip\" data-original-title=\"You can't like your own clip\"";
        }
        function C(a, b) {
            var d = "",
                e, f;
            j = c.likes;
            e = j || a.likes;
            e = (e === null || e === undefined || e === false ? e : e.count);
            if (typeof e === m) e = e.call(a, {
                hash: {}
            });
            else if (e === o) e = n.call(a, "likes.count", {
                hash: {}
            });
            d += p(e) + " Like";
            j = c.likes;
            e = j || a.likes;
            e = (e === null || e === undefined || e === false ? e : e.count);
            j = c.pluralize;
            f = j || a.pluralize;
            if (typeof f === m) e = f.call(a, e, {
                hash: {}
            });
            else if (f === o) e = n.call(a, "pluralize", e, {
                hash: {}
            });
            else e = f;
            d += p(e);
            return d;
        }
        function D(a, b) {
            return "Like";
        }
        function E(a, b) {
            return "<li class=\"clip-reader\"><a href=\"\" rel=\"tooltip\" title=\"View in Reader\">Reader</a></li>";
        }
        function F(a, b) {
            return "is-read-later";
        }
        function G(a, b) {
            return "<li class=\"clip-star starred\"><a href=\"\" rel=\"tooltip\" title=\"Unstar\">Unstar</a></li>";
        }
        function H(a, b) {
            return "<li class=\"clip-star\"><a href=\"\" rel=\"tooltip\" title=\"Star\">Star</a></li>";
        }
        function I(a, b) {
            var d = "",
                e, f;
            d += "\n<div class=\"notes\">\n    <div class=\"content\"><a href=\"#\">";
            j = c.notes;
            e = j || a.notes;
            j = c.hashtags;
            f = j || a.hashtags;
            if (typeof f === m) e = f.call(a, e, {
                hash: {}
            });
            else if (f === o) e = n.call(a, "hashtags", e, {
                hash: {}
            });
            else e = f;
            if (e || e === 0) d += e;
            d += "</a></div>\n</div>\n";
            return d;
        }
        f += "<div class=\"display\">\n    <div class=\"clip-content\">\n        <div class=\"drag\"></div>\n        <span class=\"clip-date\"><abbr class=\"timeago\" title=\"";
        j = c.created;
        g = j || b.created;
        j = c.timestamp;
        h = j || b.timestamp;
        if (typeof h === m) g = h.call(b, g, {
            hash: {}
        });
        else if (h === o) g = n.call(b, "timestamp", g, {
            hash: {}
        });
        else g = h;
        f += p(g) + "\"></abbr></span>\n        <a href=\"";
        j = c.url;
        g = j || b.url;
        if (typeof g === m) g = g.call(b, {
            hash: {}
        });
        else if (g === o) g = n.call(b, "url", {
            hash: {}
        });
        f += p(g) + "\" target=\"_blank\" class=\"clip-title\">";
        g = 75;
        j = c.title;
        h = j || b.title;
        j = c.truncateChars;
        i = j || b.truncateChars;
        if (typeof i === m) g = i.call(b, h, g, {
            hash: {}
        });
        else if (i === o) g = n.call(b, "truncateChars", h, g, {
            hash: {}
        });
        else g = i;
        f += p(g) + "</a>\n        <div class=\"edit\">\n            <input class=\"clip-input\" type=\"text\" value=\"";
        j = c.title;
        g = j || b.title;
        if (typeof g === m) g = g.call(b, {
            hash: {}
        });
        else if (g === o) g = n.call(b, "title", {
            hash: {}
        });
        f += p(g) + "\" />\n        </div>\n        <p class=\"domain\"> \n            ";
        j = c.favicon_url;
        g = j || b.favicon_url;
        h = c['if'];
        k = l.program(1, q, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.program(3, r, e);
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\n            ";
        j = c.url_domain;
        g = j || b.url_domain;
        h = c['if'];
        k = l.program(5, s, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\n            ";
        j = c.showList;
        g = j || b.showList;
        h = c['if'];
        k = l.program(7, t, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\n            <span>";
        j = c.fromUser;
        g = j || b.fromUser;
        h = c['if'];
        k = l.program(9, u, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\n            ";
        j = c.comments;
        g = j || b.comments;
        g = (g === null || g === undefined || g === false ? g : g.count);
        h = c['if'];
        k = l.program(11, v, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.program(16, y, e);
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "</span>\n            <span><a href=\"#\" class=\"clip-like ";
        j = c.hasLiked;
        g = j || b.hasLiked;
        h = c['if'];
        k = l.program(18, z, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        j = c.isOwn;
        g = j || b.isOwn;
        h = c['if'];
        k = l.program(20, A, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\" ";
        j = c.isOwn;
        g = j || b.isOwn;
        h = c['if'];
        k = l.program(22, B, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "><i class=\"icon icon-like\"></i><span>";
        j = c.likes;
        g = j || b.likes;
        g = (g === null || g === undefined || g === false ? g : g.count);
        h = c['if'];
        k = l.program(24, C, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.program(26, D, e);
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "</span></a></span>\n\n        </p>\n    </div>\n    <ul class=\"actions\">\n        ";
        j = c.article;
        g = j || b.article;
        h = c['if'];
        k = l.program(28, E, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\n        <li class=\"clip-edit\"><a href=\"\" rel=\"tooltip\" title=\"Edit\">Edit</a></li>\n        <li class=\"clip-read-later ";
        j = c.is_read_later;
        g = j || b.is_read_later;
        h = c['if'];
        k = l.program(30, F, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\"><a href=\"\" rel=\"tooltip\" title=\"Mark as Read Later\">Read Later</a></li>\n        ";
        j = c.is_starred;
        g = j || b.is_starred;
        h = c['if'];
        k = l.program(32, G, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.program(34, H, e);
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\n        <li class=\"clip-destroy\"><a href=\"\" rel=\"tooltip\" title=\"Remove\">&times;</a></li>\n    </div>\n</div>\n";
        j = c.notes;
        g = j || b.notes;
        h = c['if'];
        k = l.program(36, I, e);
        k.hash = {};
        k.fn = k;
        k.inverse = l.noop;
        g = h.call(b, g, k);
        if (g || g === 0) f += g;
        f += "\n";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.clip_list = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h = this;
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.clip_modal = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k = this,
            l = "function",
            m = c.helperMissing,
            n = void 0,
            o = this.escapeExpression;

        function p(a, b) {
            return "<a href=\"#\" class=\"reader-tab\"><span>Reader</span></a>";
        }
        function q(a, b) {
            return "is-read-later";
        }
        function r(a, b) {
            return "starred";
        }
        function s(a, b) {
            var d = "",
                e, f;
            d += "\n                <section class=\"lists\">\n                    <select>\n                        ";
            i = c.lists;
            e = i || a.lists;
            f = c.each;
            j = k.program(8, t, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += "\n                    </select>\n                </section>\n                ";
            return d;
        }
        function t(a, b) {
            var d = "",
                e;
            d += "\n                        <option data-list-id=\"";
            i = c.id;
            e = i || a.id;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "id", {
                hash: {}
            });
            d += o(e) + "\">";
            i = c.title;
            e = i || a.title;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "title", {
                hash: {}
            });
            d += o(e) + "</option>\n                        ";
            return d;
        }
        function u(a, b) {
            var d = "",
                e;
            d += "\n        <div class=\"reader-mode\">\n            <header><span class=\"list\">";
            i = c.list;
            e = i || a.list;
            e = (e === null || e === undefined || e === false ? e : e.title);
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "list.title", {
                hash: {}
            });
            d += o(e) + "</span> &#155;\n            <span class=\"domain\">";
            i = c.url_domain;
            e = i || a.url_domain;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "url_domain", {
                hash: {}
            });
            d += o(e) + "</span></header>\n            <h2 class=\"title\"><a href=\"";
            i = c.url;
            e = i || a.url;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "url", {
                hash: {}
            });
            d += o(e) + "\" target=\"_blank\"></a></h2>\n            <div class=\"body\"></div>\n            <div class=\"reader-loading\"></div>\n        </div>\n        ";
            return d;
        }
        function v(a, b) {
            var d = "",
                e;
            d += "<h1>";
            i = c.title;
            e = i || a.title;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "title", {
                hash: {}
            });
            d += o(e) + "</h1>";
            return d;
        }
        function w(a, b) {
            var d = "",
                e, f;
            d += "\n                <div class=\"clip-notes\">\n                   <div>";
            i = c.notes;
            e = i || a.notes;
            i = c.hashtags;
            f = i || a.hashtags;
            if (typeof f === l) e = f.call(a, e, {
                hash: {}
            });
            else if (f === n) e = m.call(a, "hashtags", e, {
                hash: {}
            });
            else e = f;
            d += o(e) + "</div>\n                </div>\n                \n                ";
            return d;
        }
        function x(a, b) {
            var d = "",
                e, f;
            d += "\n                ";
            i = c.canEdit;
            e = i || a.canEdit;
            f = c['if'];
            j = k.program(17, y, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += "\n                ";
            return d;
        }
        function y(a, b) {
            return "\n                <div class=\"clip-notes\">\n                   <div><a href=\"#\" class=\"add-notes\">Add notes, highlights or #tags...</a></div>\n                </div>\n                ";
        }
        function z(a, b) {
            return "liked";
        }
        function A(a, b) {
            return "rel=\"tooltip\" data-original-title=\"You can't like your own clip\"";
        }
        function B(a, b) {
            var d = "",
                e, f;
            i = c.likes;
            e = i || a.likes;
            e = (e === null || e === undefined || e === false ? e : e.count);
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "likes.count", {
                hash: {}
            });
            d += o(e) + " Like";
            i = c.likes;
            e = i || a.likes;
            e = (e === null || e === undefined || e === false ? e : e.count);
            i = c.pluralize;
            f = i || a.pluralize;
            if (typeof f === l) e = f.call(a, e, {
                hash: {}
            });
            else if (f === n) e = m.call(a, "pluralize", e, {
                hash: {}
            });
            else e = f;
            d += o(e);
            return d;
        }
        function C(a, b) {
            return "Like";
        }
        function D(a, b) {
            return "\n                <a href=\"#\" class=\"toggle-edit btn btn-mini\">Edit</a>\n                ";
        }
        function E(a, b) {
            var d = "",
                e, f;
            d += "\n            <div class=\"notes-edit\" style=\"display:none\">\n                <form class=\"edit-clip\">\n            \n                    <input type=\"text\" placeholder=\"Your title goes here\" class=\"item-title\" ";
            i = c.title;
            e = i || a.title;
            f = c['if'];
            j = k.program(30, F, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += " />\n            \n                    <div class=\"input\">\n                        <input type=\"text\" placeholder=\"Website url\" value=\"";
            i = c.url;
            e = i || a.url;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "url", {
                hash: {}
            });
            d += o(e) + "\" class=\"item-url\"/>\n                    </div>\n\n                    <div class=\"input\">\n                        <textarea placeholder=\"Add notes, highlights or #tags...\" class=\"item-notes\">";
            i = c.notes;
            e = i || a.notes;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "notes", {
                hash: {}
            });
            d += o(e) + "</textarea>\n                    </div>\n                \n                    <div class=\"actions\">\n                        <input type=\"submit\" value=\"Save Changes\" class=\"save btn button\" />\n                        <a href=\"#\" class=\"cancel\">Cancel</a>\n                    </div>\n                </form>\n            </div>\n            ";
            return d;
        }
        function F(a, b) {
            var d = "",
                e;
            d += "value=\"";
            i = c.title;
            e = i || a.title;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "title", {
                hash: {}
            });
            d += o(e) + "\"";
            return d;
        }
        f += "<div id=\"reader-bg\">\n    <div id=\"reader-content\">\n        <div id=\"reader-tabs\">\n            <div>\n                <a href=\"#\" class=\"notes-tab\"><span>Notes</span></a>\n                ";
        i = c.article;
        g = i || b.article;
        h = c['if'];
        j = k.program(1, p, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n            </div>\n        </div>\n        \n        <aside class=\"bar\">\n                <section>\n                    <a href=\"#\" class=\"close button\" title=\"Close (Esc)\">&times;</a>\n                </section>\n                \n                <section>\n                   <a href=\"https://twitter.com/share?url=";
        i = c.url;
        g = i || b.url;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "&text=";
        i = c.title;
        g = i || b.title;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "&via=kippt\" target=\"_blank\" class=\"twitter button\" title=\"Share to Twitter\"></a> \n                   <a href=\"http://www.facebook.com/sharer.php?u=";
        i = c.url;
        g = i || b.url;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "&t=";
        i = c.title;
        g = i || b.title;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "\" target=\"_blank\" class=\"facebook button\" title=\"Share to Facebook\"></a> \n                   <a href=\"http://www.tumblr.com/share?u=";
        i = c.url;
        g = i || b.url;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "&t=";
        i = c.title;
        g = i || b.title;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "\" taget=\"_blank\" title=\"Share on Tumblr\" class=\"tumblr button\"></a>\n                    <div class=\"btn-group share\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                            <i></i>\n                            <span class=\"caret\"></span>\n                        </a>\n                        <ul class=\"dropdown-menu pull-right\">\n                            <!--<li><a href=\"#\" title=\"";
        i = c.url;
        g = i || b.url;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "url", {
            hash: {}
        });
        f += o(g) + "\">Copy Link</a></li>\n                            <li class=\"divider\"></li>-->\n                            <li><a href=\"http://www.instapaper.com/hello2?url=";
        i = c.url;
        g = i || b.url;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "&title=";
        i = c.title;
        g = i || b.title;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "\" title=\"Save to Instapaper\" class=\"instapaper\">Send to Instapaper</a></li>\n                            <li><a href=\"http://www.readability.com/save?url=";
        i = c.url;
        g = i || b.url;
        i = c.encodeURI;
        h = i || b.encodeURI;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "encodeURI", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "\" title=\"Save to Readability\" class=\"readability\">Send to Readability</a></li>\n                            <li><a href=\"/accounts/connect/pocket/\" title=\"Save to Pocket\" class=\"pocket\">Send to Pocket</a></li>\n                        </ul>\n                    </div>\n                </section>\n                \n                <section>\n                    <a href=\"#\" class=\"read-later button ";
        i = c.is_read_later;
        g = i || b.is_read_later;
        h = c['if'];
        j = k.program(3, q, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\" title=\"Read Later\"></a>    \n                    <a href=\"#\" class=\"star button ";
        i = c.is_starred;
        g = i || b.is_starred;
        h = c['if'];
        j = k.program(5, r, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\" title=\"Star\"></a>\n                </section>\n                \n                ";
        i = c.isListOwner;
        g = i || b.isListOwner;
        h = c['if'];
        j = k.program(7, s, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n        </aside>\n        \n        ";
        i = c.article;
        g = i || b.article;
        h = c['if'];
        j = k.program(10, u, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n        \n        <div class=\"notes-mode\">\n            <img src=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.avatar_url", {
            hash: {}
        });
        f += o(g) + "\" class=\"avatar\" width=\"42\" height=\"32\" title=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.username", {
            hash: {}
        });
        f += o(g) + "\">\n            \n            <div class=\"notes-content\">\n                ";
        i = c.title;
        g = i || b.title;
        h = c['if'];
        j = k.program(12, v, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += " \n                <a class=\"item-url\" href=\"";
        i = c.url;
        g = i || b.url;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "url", {
            hash: {}
        });
        f += o(g) + "\">";
        i = c.url;
        g = i || b.url;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "url", {
            hash: {}
        });
        f += o(g) + "</a> \n                \n                ";
        i = c.notes;
        g = i || b.notes;
        h = c['if'];
        j = k.program(14, w, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.program(16, x, e);
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n                \n                <div>\n                    <span>Posted by <strong>";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.username", {
            hash: {}
        });
        f += o(g) + "</strong> <i class=\"icon icon-date\"></i>  <abbr class=\"timeago\" title=\"";
        i = c.created;
        g = i || b.created;
        i = c.timestamp;
        h = i || b.timestamp;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "timestamp", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "\"></abbr></span>\n                    <a href=\"#\" class=\"clip-like ";
        i = c.hasLiked;
        g = i || b.hasLiked;
        h = c['if'];
        j = k.program(19, z, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\" ";
        i = c.isOwn;
        g = i || b.isOwn;
        h = c['if'];
        j = k.program(21, A, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += ">\n                        <i class=\"icon icon-like\"></i>\n                        <span>";
        i = c.likes;
        g = i || b.likes;
        g = (g === null || g === undefined || g === false ? g : g.count);
        h = c['if'];
        j = k.program(23, B, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.program(25, C, e);
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "</span>\n                    </a>\n                </div>\n                ";
        i = c.canEdit;
        g = i || b.canEdit;
        h = c['if'];
        j = k.program(27, D, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n            </div>\n            ";
        i = c.canEdit;
        g = i || b.canEdit;
        h = c['if'];
        j = k.program(29, E, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n            <!-- Likes -->\n            <div class=\"likes\">\n                <h4>Likes</h4>\n                <ul class=\"like-list\"></ul>\n            </div>\n            \n            <!-- Comments -->\n            <div class=\"comments\">\n                <ul class=\"comment-list\"></ul>\n                <form class=\"new-comment\">\n                    <img src=\"";
        i = c.currentUser;
        g = i || b.currentUser;
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "currentUser.avatar_url", {
            hash: {}
        });
        f += o(g) + "\" class=\"avatar\" width=\"42\" height=\"42\" title=\"Post as ";
        i = c.currentUser;
        g = i || b.currentUser;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "currentUser.username", {
            hash: {}
        });
        f += o(g) + "\">\n                    <textarea placeholder=\"Add comments or notes\"></textarea>\n                    <div class=\"actions\">\n                        <input type=\"submit\" value=\"Comment\" class=\"comment btn button\" />\n                    </div>\n                </form>\n            </div>\n            <div class=\"comments-loading\"></div>\n        </div>\n    </div>\n</div>\n";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.clips = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f, g = this;
        return "<div class=\"clearfix\">\n    <div id=\"list-info\"></div>\n    <div id=\"new-clip\"></div>\n</div>\n\n<div id=\"clips-container\">\n    <ul id=\"clip-list\" class=\"unstyled\"></ul>\n    <div id=\"no-clips\">\n        <p><strong>Find clips to add to this list</strong>\n        You can add links with extensions, bookmarklets and via email. <a href=\"/tools/\">View the tools</a>\n        </p>\n        \n        <p class=\"no-collaborate\"><strong>Collaborate with your team.</strong> Invite people to this list and easily share useful links</p>\n        \n        <p class=\"no-public\"><strong>Make your list public</strong>. Share the interesting things you find and save.</p>\n    </div>\n    <div id=\"no-search-results\">No search results.</div>\n    <div class=\"pagination\"></div>\n</div>\n\n<div class=\"loading\"></div>";
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.list_item = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k = this,
            l = "function",
            m = c.helperMissing,
            n = void 0,
            o = this.escapeExpression;

        function p(a, b) {
            return "collaborative";
        }
        function q(a, b) {
            return "owner";
        }
        function r(a, b) {
            return "public";
        }
        f += "<div class=\"list-link ";
        i = c.isCollaborative;
        g = i || b.isCollaborative;
        h = c['if'];
        j = k.program(1, p, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += " ";
        i = c.isOwner;
        g = i || b.isOwner;
        h = c['if'];
        j = k.program(3, q, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += " ";
        i = c.is_private;
        g = i || b.is_private;
        h = c.unless;
        j = k.program(5, r, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\"><a href=\"";
        i = c.listUrl;
        g = i || b.listUrl;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "listUrl", {
            hash: {}
        });
        f += o(g) + "\" data-list-slug=\"";
        i = c.slug;
        g = i || b.slug;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "slug", {
            hash: {}
        });
        f += o(g) + "\" data-list-id=\"";
        i = c.id;
        g = i || b.id;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "id", {
            hash: {}
        });
        f += o(g) + "\" data-link=\"push\"><span></span>";
        i = c.title;
        g = i || b.title;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "title", {
            hash: {}
        });
        f += o(g) + "</a></div>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.list_info = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k = this,
            l = "function",
            m = c.helperMissing,
            n = void 0,
            o = this.escapeExpression;

        function p(a, b) {
            var d;
            i = c.title;
            d = i || a.title;
            if (typeof d === l) d = d.call(a, {
                hash: {}
            });
            else if (d === n) d = m.call(a, "title", {
                hash: {}
            });
            return o(d);
        }
        function q(a, b) {
            var d, e;
            i = c['system-list'];
            d = i || a['system-list'];
            e = c.unless;
            j = k.program(4, r, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            d = e.call(a, d, j);
            if (d || d === 0) return d;
            else return '';
        }
        function r(a, b) {
            var d = "",
                e, f;
            d += "<small>";
            i = c.model;
            e = i || a.model;
            e = (e === null || e === undefined || e === false ? e : e.is_private);
            f = c['if'];
            j = k.program(5, s, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.program(7, t, b);
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += "</small>";
            return d;
        }
        function s(a, b) {
            return "<i class=\"icon icon-lock\"></i>Private";
        }
        function t(a, b) {
            var d = "",
                e;
            d += "<a href=\"";
            i = c.list_url;
            e = i || a.list_url;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "list_url", {
                hash: {}
            });
            d += o(e) + "\" target=\"_blank\" title=\"View the public list\">Public</a>";
            return d;
        }
        function u(a, b) {
            var d = "",
                e, f;
            d += "\n<ul class=\"list-actions unstyled\">\n    <li class=\"btn-group\">\n        <a class=\"btn dropdown-toggle settings\" data-toggle=\"dropdown\" href=\"#\">\n            <i></i>\n            <span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu pull-right\">\n            ";
            i = c.rss_url;
            e = i || a.rss_url;
            f = c['if'];
            j = k.program(10, v, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += "\n            ";
            i = c['system-list'];
            e = i || a['system-list'];
            f = c.unless;
            j = k.program(17, z, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += "\n        </ul>\n    </li>\n    ";
            i = c['system-list'];
            e = i || a['system-list'];
            f = c.unless;
            j = k.program(20, B, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += "\n</ul>\n";
            return d;
        }
        function v(a, b) {
            var d = "",
                e, f;
            d += "<li><a href=\"";
            i = c.rss_url;
            e = i || a.rss_url;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "rss_url", {
                hash: {}
            });
            d += o(e) + "\" class=\"rss";
            i = c['system-list'];
            e = i || a['system-list'];
            f = c['if'];
            j = k.program(11, w, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            i = c.model;
            e = i || a.model;
            e = (e === null || e === undefined || e === false ? e : e.is_private);
            f = c['if'];
            j = k.program(13, x, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += "\" title=\"List RSS feed";
            i = c.model;
            e = i || a.model;
            e = (e === null || e === undefined || e === false ? e : e.is_private);
            f = c['if'];
            j = k.program(15, y, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            e = f.call(a, e, j);
            if (e || e === 0) d += e;
            d += "\">RSS</a></li>";
            return d;
        }
        function w(a, b) {
            return " private";
        }
        function x(a, b) {
            return " private";
        }
        function y(a, b) {
            return " (Private)";
        }
        function z(a, b) {
            var d, e;
            i = c.isOwner;
            d = i || a.isOwner;
            e = c['if'];
            j = k.program(18, A, b);
            j.hash = {};
            j.fn = j;
            j.inverse = k.noop;
            d = e.call(a, d, j);
            if (d || d === 0) return d;
            else return '';
        }
        function A(a, b) {
            return "<li><a href=\"#\" class=\"edit\">Edit</a></li>\n            <li><a href=\"#\" class=\"delete\">Delete</a></li>";
        }
        function B(a, b) {
            return "\n    <li><a href=\"#\" class=\"share btn\"><i></i>Invite</a></li>\n    ";
        }
        f += "\n<h3 class=\"name\" title=\"";
        i = c.title;
        g = i || b.title;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "title", {
            hash: {}
        });
        f += o(g) + "\">\n    ";
        i = c.title;
        g = i || b.title;
        h = c['if'];
        j = k.program(1, p, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n    ";
        i = c.search;
        g = i || b.search;
        h = c.unless;
        j = k.program(3, q, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n</h3>\n";
        i = c.search;
        g = i || b.search;
        h = c.unless;
        j = k.program(9, u, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.list_new_clip = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f, g = this;
        return "<input placeholder=\"Add a link...\" type=\"text\">";
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.list_loading = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f, g = this;
        return "<div class=\"loading\"></div>";
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.list_sharing_modal = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k = this,
            l = "function",
            m = c.helperMissing,
            n = void 0,
            o = this.escapeExpression;

        function p(a, b) {
            var d = "",
                e;
            d += "\n                <div class=\"share-actions\">\n                    Share: \n                    <a href=\"#\" target=\"_blank\" class=\"icon icon-twitter twitter\"></a>\n                    <a href=\"#\" class=\"icon icon-facebook facebook\" target=\"_blank\"></a>\n                    <input type=\"text\" value=\"";
            i = c.list_url;
            e = i || a.list_url;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "list_url", {
                hash: {}
            });
            d += o(e) + "\" class=\"copy-url\" />\n                </div>\n                ";
            return d;
        }
        f += "<div id=\"sharing\" class=\"kippt-modal\">\n    <div class=\"overlay\">\n        <div class=\"content\">\n            <a href=\"#\" class=\"close\">&times;</a>\n            \n            <h2><i></i>Share list <strong>";
        i = c.title;
        g = i || b.title;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "title", {
            hash: {}
        });
        f += o(g) + "</strong></h2>\n\n            \n            <div class=\"toolbar\">\n                <strong>Collaborators</strong>\n                \n                ";
        i = c.is_private;
        g = i || b.is_private;
        h = c.unless;
        j = k.program(1, p, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n            </div>    \n                \n            <ul class=\"collaborators\">\n                <li>\n                    <img src=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.avatar_url", {
            hash: {}
        });
        f += o(g) + "\" width=\"32\" height=\"32\">\n                    <strong>";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.username", {
            hash: {}
        });
        f += o(g) + "</strong>\n                    <span>Owner</span>\n                </li>\n            </ul>\n            \n            <form class=\"invite\">\n                <label for=\"invite-collaborators\"><strong>Invite collaborators to this list</strong><span class=\"status\"></span></label>\n                <input type=\"text\" id=\"invite-collaborators\" placeholder=\"Enter usernames or emails\"/>\n                <input type=\"submit\" value=\"Invite &amp; Share\" class=\"btn btn-green\">\n                <input type=\"reset\" value=\"Close\" class=\"cancel btn btn-white\">\n                <div class=\"error\"></div>\n            </form>\n        </div>\n    </div>\n</div>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.list_sharing_collaborator = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k = this,
            l = "function",
            m = c.helperMissing,
            n = void 0,
            o = this.escapeExpression;

        function p(a, b) {
            var d = "",
                e;
            d += "<a class=\"remove\" href=\"#\" data-user-id=\"";
            i = c.id;
            e = i || a.id;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "id", {
                hash: {}
            });
            d += o(e) + "\">&times;</a>";
            return d;
        }
        function q(a, b) {
            return "<a class=\"leave\" href=\"#\">&times;</a>";
        }
        i = c.isMe;
        g = i || b.isMe;
        h = c.unless;
        j = k.program(1, p, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n";
        i = c.isMe;
        g = i || b.isMe;
        h = c['if'];
        j = k.program(3, q, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n<img src=\"";
        i = c.avatar_url;
        g = i || b.avatar_url;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "avatar_url", {
            hash: {}
        });
        f += o(g) + "\" width=\"32\" height=\"32\">\n<strong>";
        i = c.username;
        g = i || b.username;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "username", {
            hash: {}
        });
        f += o(g) + "</strong>\n<span>Collaborator</span>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.stats = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k = this,
            l = "function",
            m = c.helperMissing,
            n = void 0,
            o = this.escapeExpression;

        function p(a, b) {
            var d = "",
                e, f;
            d += "\n    <span class=\"todo-count\">\n        <span class=\"number\">";
            i = c.remaining;
            e = i || a.remaining;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "remaining", {
                hash: {}
            });
            d += o(e) + "</span>\n        <span class=\"word\">\n            item";
            i = c.remaining;
            e = i || a.remaining;
            i = c.pluralize;
            f = i || a.pluralize;
            if (typeof f === l) e = f.call(a, e, {
                hash: {}
            });
            else if (f === n) e = m.call(a, "pluralize", e, {
                hash: {}
            });
            else e = f;
            d += o(e) + " left.\n        </span>\n    </span>\n";
            return d;
        }
        function q(a, b) {
            var d = "",
                e, f;
            d += "\n    <span class=\"todo-clear\">\n        <a href=\"#\">\n            Clear <span class=\"number-done\">";
            i = c.done;
            e = i || a.done;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "done", {
                hash: {}
            });
            d += o(e) + "</span>\n            completed <span class=\"word-done\">\n                    item";
            i = c.done;
            e = i || a.done;
            i = c.pluralize;
            f = i || a.pluralize;
            if (typeof f === l) e = f.call(a, e, {
                hash: {}
            });
            else if (f === n) e = m.call(a, "pluralize", e, {
                hash: {}
            });
            else e = f;
            d += o(e) + "\n                </span>\n        </a>\n    </span>\n";
            return d;
        }
        i = c.total;
        g = i || b.total;
        h = c['if'];
        j = k.program(1, p, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n";
        i = c.done;
        g = i || b.done;
        h = c['if'];
        j = k.program(3, q, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.pagination = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f, g, h, i, j = this,
            k = "function",
            l = c.helperMissing,
            m = void 0,
            n = this.escapeExpression;

        function o(a, b) {
            var d = "",
                e, f;
            d += "\n    <div class=\"pagination-counts\">";
            e = a;
            h = c['pagination-counts'];
            f = h || a['pagination-counts'];
            if (typeof f === k) e = f.call(a, e, {
                hash: {}
            });
            else if (f === m) e = l.call(a, "pagination-counts", e, {
                hash: {}
            });
            else e = f;
            d += n(e) + "</div>\n    <div class=\"pagination-nav\">\n        <div class=\"pages\">\n            <form action=\".\" action=\"POST\" class=\"page-input\">\n                Page <span class=\"link\">";
            h = c.page;
            e = h || a.page;
            if (typeof e === k) e = e.call(a, {
                hash: {}
            });
            else if (e === m) e = l.call(a, "page", {
                hash: {}
            });
            d += n(e) + "</span><input type=\"text\" value=\"";
            h = c.page;
            e = h || a.page;
            if (typeof e === k) e = e.call(a, {
                hash: {}
            });
            else if (e === m) e = l.call(a, "page", {
                hash: {}
            });
            d += n(e) + "\" class=\"page hidden\"/> of ";
            h = c.pages;
            e = h || a.pages;
            if (typeof e === k) e = e.call(a, {
                hash: {}
            });
            else if (e === m) e = l.call(a, "pages", {
                hash: {}
            });
            d += n(e) + "\n            </form>\n        </div>\n        <div class=\"buttons\">\n        ";
            h = c.pages;
            e = h || a.pages;
            f = c['if'];
            i = j.program(2, p, b);
            i.hash = {};
            i.fn = i;
            i.inverse = j.noop;
            e = f.call(a, e, i);
            if (e || e === 0) d += e;
            d += "\n        </div>\n    </div>\n";
            return d;
        }
        function p(a, b) {
            var d = "",
                e, f;
            d += "\n            ";
            h = c.prev;
            e = h || a.prev;
            f = c['if'];
            i = j.program(3, q, b);
            i.hash = {};
            i.fn = i;
            i.inverse = j.program(5, r, b);
            e = f.call(a, e, i);
            if (e || e === 0) d += e;
            d += "\n\n            ";
            h = c.next;
            e = h || a.next;
            f = c['if'];
            i = j.program(7, s, b);
            i.hash = {};
            i.fn = i;
            i.inverse = j.program(9, t, b);
            e = f.call(a, e, i);
            if (e || e === 0) d += e;
            d += "\n        ";
            return d;
        }
        function q(a, b) {
            return "\n                <span><a href=\"#\" class=\"prev\">&#139;</a></span>\n            ";
        }
        function r(a, b) {
            return "\n                <span class=\"prev\">&#139;</span>\n            ";
        }
        function s(a, b) {
            return "\n                <span><a href=\"#\" class=\"next\">&#155;</a></span>\n            ";
        }
        function t(a, b) {
            return "\n                <span class=\"next\">&#155;</span>\n            ";
        }
        h = c.total;
        f = h || b.total;
        g = c['if'];
        i = j.program(1, o, e);
        i.hash = {};
        i.fn = i;
        i.inverse = j.noop;
        f = g.call(b, f, i);
        if (f || f === 0) return f;
        else return '';
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.notes = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j = this,
            k = "function",
            l = c.helperMissing,
            m = void 0,
            n = this.escapeExpression;
        f += "<div class=\"header clearfix\">\n    <h3 class=\"name\"><a href=\"#\" class=\"back\">";
        i = c['back-title'];
        g = i || b['back-title'];
        if (typeof g === k) g = g.call(b, {
            hash: {}
        });
        else if (g === m) g = l.call(b, "back-title", {
            hash: {}
        });
        f += n(g) + "</a> &rsaquo; Note</h3>\n    <ul class=\"clip-actions unstyled\">\n        <div class=\"note\">\n            <li class=\"user-list\"><a href=\"#\" class=\"edit\">Edit</a></li>\n            <li class=\"user-list\"><a href=\"#\" class=\"delete\">Delete</a></li>\n        </div>\n        <div class=\"editor\">\n            <li class=\"user-list\"><a href=\"#\" class=\"cancel\">Cancel</a></li>\n            <li class=\"user-list\"><a href=\"#\" class=\"save btn\">Save</a></li>\n        </div>\n    </ul>\n</div>\n\n<div class=\"content\">\n    <div class=\"note\">\n        <h2 class=\"title\">";
        i = c.clip;
        g = i || b.clip;
        g = (g === null || g === undefined || g === false ? g : g.title);
        if (typeof g === k) g = g.call(b, {
            hash: {}
        });
        else if (g === m) g = l.call(b, "clip.title", {
            hash: {}
        });
        f += n(g) + "</h2>\n        <div>";
        i = c.clip;
        g = i || b.clip;
        g = (g === null || g === undefined || g === false ? g : g.notes);
        i = c.hashtags;
        h = i || b.hashtags;
        if (typeof h === k) g = h.call(b, g, {
            hash: {}
        });
        else if (h === m) g = l.call(b, "hashtags", g, {
            hash: {}
        });
        else g = h;
        if (g || g === 0) f += g;
        f += "</div>\n    </div>\n\n    <div class=\"editor\">\n        <input type=\"text\" class=\"title\" value=\"";
        i = c.clip;
        g = i || b.clip;
        g = (g === null || g === undefined || g === false ? g : g.title);
        if (typeof g === k) g = g.call(b, {
            hash: {}
        });
        else if (g === m) g = l.call(b, "clip.title", {
            hash: {}
        });
        f += n(g) + "\" />\n        <textarea class=\"notes\">";
        i = c.clip;
        g = i || b.clip;
        g = (g === null || g === undefined || g === false ? g : g.notes);
        if (typeof g === k) g = g.call(b, {
            hash: {}
        });
        else if (g === m) g = l.call(b, "clip.notes", {
            hash: {}
        });
        f += n(g) + "</textarea>\n    </div>\n</div>\n\n<div class=\"footer clearfix\">\n    <div class=\"editor\"></div>\n    <ul class=\"clip-actions unstyled\">\n        <div class=\"note\">\n            <li class=\"user-list\"><a href=\"#\" class=\"edit\">Edit</a></li>\n            <li class=\"user-list\"><a href=\"#\" class=\"delete\">Delete</a></li>\n        </div>\n        <div class=\"editor\">\n            <li class=\"user-list\"><a href=\"#\" class=\"cancel\">Cancel</a></li>\n            <li class=\"user-list\"><a href=\"#\" class=\"save btn\">Save</a></li>\n        </div>\n    </ul>\n</div>\n";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.notifications = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f, g = this;
        return "<div class=\"row\">\n    <div class=\"main span12 columns\">\n        <div class=\"padding page\">\n            <h1>Notifications</h1>\n            \n            <ul class=\"notifications\"></ul>\n        </div>\n    </div>\n</div>";
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.notification_clip = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i = this,
            j = "function",
            k = c.helperMissing,
            l = void 0,
            m = this.escapeExpression;
        f += "<img src=\"";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.user);
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.user.avatar_url", {
            hash: {}
        });
        f += m(g) + "\" class=\"avatar\" width=\"32\" height=\"32\" title=\"";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.user);
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.user.username", {
            hash: {}
        });
        f += m(g) + "\">\n<div>\n    <a href=\"#\">";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.user);
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.user.username", {
            hash: {}
        });
        f += m(g) + "</a> added new clip to list <a href=\"#\">";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.list);
        g = (g === null || g === undefined || g === false ? g : g.title);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.list.title", {
            hash: {}
        });
        f += m(g) + "</a>\n    <p> \n        <a class=\"title\" href=\"";
        h = c.item_url;
        g = h || b.item_url;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item_url", {
            hash: {}
        });
        f += m(g) + "\">";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.title);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.title", {
            hash: {}
        });
        f += m(g) + "</a>\n        <span><i class=\"fav\" style=\"background-image:url('";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.favicon_url);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.favicon_url", {
            hash: {}
        });
        f += m(g) + "');\"></i> ";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.url_domain);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.url_domain", {
            hash: {}
        });
        f += m(g) + "  &middot; <a href=\"";
        h = c.item_url;
        g = h || b.item_url;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item_url", {
            hash: {}
        });
        f += m(g) + "\">";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.comments);
        g = (g === null || g === undefined || g === false ? g : g.count);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.comments.count", {
            hash: {}
        });
        f += m(g) + " comment</a></span>\n    </p>\n</div>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.notification_comment = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i = this,
            j = "function",
            k = c.helperMissing,
            l = void 0,
            m = this.escapeExpression;
        f += "<img src=\"";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.user);
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.user.avatar_url", {
            hash: {}
        });
        f += m(g) + "\" class=\"avatar\" width=\"32\" height=\"32\" title=\"";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.user);
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.user.username", {
            hash: {}
        });
        f += m(g) + "\">\n<div>\n    <a href=\"";
        h = c.item_url;
        g = h || b.item_url;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item_url", {
            hash: {}
        });
        f += m(g) + "\">";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.user);
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.user.username", {
            hash: {}
        });
        f += m(g) + "</a> commented on <a href=\"";
        h = c.item_url;
        g = h || b.item_url;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item_url", {
            hash: {}
        });
        f += m(g) + "\">";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.clip);
        g = (g === null || g === undefined || g === false ? g : g.title);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.clip.title", {
            hash: {}
        });
        f += m(g) + "</a>\n    <p class=\"comment-body\"><a href=\"";
        h = c.item_url;
        g = h || b.item_url;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item_url", {
            hash: {}
        });
        f += m(g) + "\">";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.body);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.body", {
            hash: {}
        });
        f += m(g) + "</a></p>\n</div>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.notification_like = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i = this,
            j = "function",
            k = c.helperMissing,
            l = void 0,
            m = this.escapeExpression;
        f += "<img src=\"";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.avatar_url", {
            hash: {}
        });
        f += m(g) + "\" class=\"avatar\" width=\"32\" height=\"32\" title=\"";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.user);
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.user.username", {
            hash: {}
        });
        f += m(g) + "\">\n<div>\n    <a href=\"";
        h = c.item_url;
        g = h || b.item_url;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item_url", {
            hash: {}
        });
        f += m(g) + "\">";
        h = c.item;
        g = h || b.item;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item.username", {
            hash: {}
        });
        f += m(g) + "</a> liked your clip <a href=\"";
        h = c.item_url;
        g = h || b.item_url;
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "item_url", {
            hash: {}
        });
        f += m(g) + "\">";
        h = c.clip;
        g = h || b.clip;
        g = (g === null || g === undefined || g === false ? g : g.title);
        if (typeof g === j) g = g.call(b, {
            hash: {}
        });
        else if (g === l) g = k.call(b, "clip.title", {
            hash: {}
        });
        f += m(g) + "</a>\n</div>";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.feed = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f, g = this;
        return "<h1>Your Feed</h1>\n\n<div class=\"no-feed\">\n    <div>\n        <h2>\n            Follow what's interesting\n            <small>Find what's good by following your friends and tastemakers. </small>\n        </h2>\n        <a class=\"btn btn-large btn-green\" href=\"/find-friends/\">Discover people and lists to follow</a>\n    </div>\n</div>\n\n<ul class=\"feed-list\"></ul>\n\n<div class=\"load-more\">\n    <a href=\"#\" class=\"load\">Load more<i>&nbsp;</i></a>\n    <span class=\"loading-feed\">Loading...</span>\n</div>\n\n<div class=\"loading\"></div>";
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.feed_clip = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j, k = this,
            l = "function",
            m = c.helperMissing,
            n = void 0,
            o = this.escapeExpression;

        function p(a, b) {
            var d = "",
                e;
            d += " via <a href=\"";
            i = c.via;
            e = i || a.via;
            e = (e === null || e === undefined || e === false ? e : e.list);
            e = (e === null || e === undefined || e === false ? e : e.app_url);
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "via.list.app_url", {
                hash: {}
            });
            d += o(e) + "\">";
            i = c.via;
            e = i || a.via;
            e = (e === null || e === undefined || e === false ? e : e.user);
            e = (e === null || e === undefined || e === false ? e : e.username);
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "via.user.username", {
                hash: {}
            });
            d += o(e) + "</a>";
            return d;
        }
        function q(a, b) {
            var d = "",
                e, f;
            d += "<div class=\"notes\"><a href=\"";
            i = c.app_url;
            e = i || a.app_url;
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "app_url", {
                hash: {}
            });
            d += o(e) + "\" class=\"clip-link\"><div class=\"content\">";
            i = c.notes;
            e = i || a.notes;
            i = c['no-hashtags'];
            f = i || a['no-hashtags'];
            if (typeof f === l) e = f.call(a, e, {
                hash: {}
            });
            else if (f === n) e = m.call(a, "no-hashtags", e, {
                hash: {}
            });
            else e = f;
            d += o(e) + "</div></a></div>";
            return d;
        }
        function r(a, b) {
            var d = "",
                e, f;
            i = c.comments;
            e = i || a.comments;
            e = (e === null || e === undefined || e === false ? e : e.count);
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "comments.count", {
                hash: {}
            });
            d += o(e) + " Comment";
            i = c.comments;
            e = i || a.comments;
            e = (e === null || e === undefined || e === false ? e : e.count);
            i = c.pluralize;
            f = i || a.pluralize;
            if (typeof f === l) e = f.call(a, e, {
                hash: {}
            });
            else if (f === n) e = m.call(a, "pluralize", e, {
                hash: {}
            });
            else e = f;
            d += o(e);
            return d;
        }
        function s(a, b) {
            return "Comment";
        }
        function t(a, b) {
            return "liked";
        }
        function u(a, b) {
            var d = "",
                e, f;
            i = c.likes;
            e = i || a.likes;
            e = (e === null || e === undefined || e === false ? e : e.count);
            if (typeof e === l) e = e.call(a, {
                hash: {}
            });
            else if (e === n) e = m.call(a, "likes.count", {
                hash: {}
            });
            d += o(e) + " Like";
            i = c.likes;
            e = i || a.likes;
            e = (e === null || e === undefined || e === false ? e : e.count);
            i = c.pluralize;
            f = i || a.pluralize;
            if (typeof f === l) e = f.call(a, e, {
                hash: {}
            });
            else if (f === n) e = m.call(a, "pluralize", e, {
                hash: {}
            });
            else e = f;
            d += o(e);
            return d;
        }
        function v(a, b) {
            return "Like";
        }
        f += "<div class=\"feed-clip feed-item\">\n    <a href=\"#\" class=\"clip-save\" data-url=\"";
        i = c.url;
        g = i || b.url;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "url", {
            hash: {}
        });
        f += o(g) + "\" data-title=\"";
        i = c.title;
        g = i || b.title;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "title", {
            hash: {}
        });
        f += o(g) + "\"><i class=\"icon icon-save\"></i> Save</a>\n    <div class=\"clip-save-popup\"></div>\n    <a href=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.app_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.app_url", {
            hash: {}
        });
        f += o(g) + "\" title=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.username", {
            hash: {}
        });
        f += o(g) + "\"><img src=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.avatar_url", {
            hash: {}
        });
        f += o(g) + "\" class=\"avatar\"></a>\n    <div class=\"feed-event\"><a href=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.app_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.app_url", {
            hash: {}
        });
        f += o(g) + "\">";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "user.username", {
            hash: {}
        });
        f += o(g) + "</a> added to list <a href=\"";
        i = c.list;
        g = i || b.list;
        g = (g === null || g === undefined || g === false ? g : g.app_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "list.app_url", {
            hash: {}
        });
        f += o(g) + "\">";
        i = c.list;
        g = i || b.list;
        g = (g === null || g === undefined || g === false ? g : g.title);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "list.title", {
            hash: {}
        });
        f += o(g) + "</a>";
        i = c.via;
        g = i || b.via;
        h = c['if'];
        j = k.program(1, p, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += " <span class=\"timestamp\"><abbr class=\"timeago\" title=\"";
        i = c.created;
        g = i || b.created;
        i = c.timestamp;
        h = i || b.timestamp;
        if (typeof h === l) g = h.call(b, g, {
            hash: {}
        });
        else if (h === n) g = m.call(b, "timestamp", g, {
            hash: {}
        });
        else g = h;
        f += o(g) + "\"></abbr></span></div>\n    <div class=\"feed-content\">\n        \n        <a href=\"";
        i = c.url;
        g = i || b.url;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "url", {
            hash: {}
        });
        f += o(g) + "\" class=\"feed-title\" target=\"_blank\">";
        i = c.title;
        g = i || b.title;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "title", {
            hash: {}
        });
        f += o(g) + "</a>\n        \n        ";
        i = c.notes;
        g = i || b.notes;
        h = c['if'];
        j = k.program(3, q, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\n        \n        <div class=\"feed-actions\"> \n            <span><i class=\"fav\" style=\"background-image:url('";
        i = c.favicon_url;
        g = i || b.favicon_url;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "favicon_url", {
            hash: {}
        });
        f += o(g) + "');\"></i>";
        i = c.url_domain;
        g = i || b.url_domain;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "url_domain", {
            hash: {}
        });
        f += o(g) + "</span> \n            <span><a href=\"";
        i = c.app_url;
        g = i || b.app_url;
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "app_url", {
            hash: {}
        });
        f += o(g) + "\" class=\"clip-link comment\" data-link=\"push\"><i class=\"icon icon-comment\"></i>";
        i = c.comments;
        g = i || b.comments;
        g = (g === null || g === undefined || g === false ? g : g.count);
        h = c['if'];
        j = k.program(5, r, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.program(7, s, e);
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "</a></span>\n            <span><a href=\"#\" class=\"clip-like ";
        i = c.hasLiked;
        g = i || b.hasLiked;
        h = c['if'];
        j = k.program(9, t, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.noop;
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "\"><i class=\"icon icon-like\"></i><span>";
        i = c.likes;
        g = i || b.likes;
        g = (g === null || g === undefined || g === false ? g : g.count);
        h = c['if'];
        j = k.program(11, u, e);
        j.hash = {};
        j.fn = j;
        j.inverse = k.program(13, v, e);
        g = h.call(b, g, j);
        if (g || g === 0) f += g;
        f += "</span></a></span>\n        </div>\n    </div>\n    <div class=\"feed-comments\">\n        <div class=\"all-comments\"><a href=\"";
        i = c.clip;
        g = i || b.clip;
        g = (g === null || g === undefined || g === false ? g : g.app_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "clip.app_url", {
            hash: {}
        });
        f += o(g) + "\" class=\"clip-link\" data-link=\"push\">View all ";
        i = c.comments;
        g = i || b.comments;
        g = (g === null || g === undefined || g === false ? g : g.count);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "comments.count", {
            hash: {}
        });
        f += o(g) + " comments</a></div>\n        <ul></ul>\n        <div class=\"reply\">\n            <form class=\"add-comment\">\n                <img src=\"";
        i = c.currentUser;
        g = i || b.currentUser;
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === l) g = g.call(b, {
            hash: {}
        });
        else if (g === n) g = m.call(b, "currentUser.avatar_url", {
            hash: {}
        });
        f += o(g) + "\" width=\"32\" class=\"avatar\">\n                <input type=\"text\" placeholder=\"Leave a comment...\">\n            </form>\n        </div>\n    </div>\n</div>\n";
        return f;
    });
})();
(function() {
    var a = Handlebars.template,
        b = Handlebars.templates = Handlebars.templates || {};
    b.feed_comment = a(function(a, b, c, d, e) {
        c = c || a.helpers;
        var f = "",
            g, h, i, j = this,
            k = "function",
            l = c.helperMissing,
            m = void 0,
            n = this.escapeExpression;
        f += "<a href=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.app_url);
        if (typeof g === k) g = g.call(b, {
            hash: {}
        });
        else if (g === m) g = l.call(b, "user.app_url", {
            hash: {}
        });
        f += n(g) + "\"><img src=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.avatar_url);
        if (typeof g === k) g = g.call(b, {
            hash: {}
        });
        else if (g === m) g = l.call(b, "user.avatar_url", {
            hash: {}
        });
        f += n(g) + "\" width=\"32\" class=\"avatar\"></a>\n<div class=\"body\">\n    <div style=\"float:right;\"><span class=\"timestamp\"><abbr class=\"timeago\" title=\"";
        i = c.created;
        g = i || b.created;
        i = c.timestamp;
        h = i || b.timestamp;
        if (typeof h === k) g = h.call(b, g, {
            hash: {}
        });
        else if (h === m) g = l.call(b, "timestamp", g, {
            hash: {}
        });
        else g = h;
        f += n(g) + "\"></abbr></span></div>\n    <div class=\"body-text\">\n        <a href=\"";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.app_url);
        if (typeof g === k) g = g.call(b, {
            hash: {}
        });
        else if (g === m) g = l.call(b, "user.app_url", {
            hash: {}
        });
        f += n(g) + "\">";
        i = c.user;
        g = i || b.user;
        g = (g === null || g === undefined || g === false ? g : g.username);
        if (typeof g === k) g = g.call(b, {
            hash: {}
        });
        else if (g === m) g = l.call(b, "user.username", {
            hash: {}
        });
        f += n(g) + "</a>\n        ";
        i = c.body;
        g = i || b.body;
        i = c.urlize;
        h = i || b.urlize;
        if (typeof h === k) g = h.call(b, g, {
            hash: {}
        });
        else if (h === m) g = l.call(b, "urlize", g, {
            hash: {}
        });
        else g = h;
        f += n(g) + "\n    </div>\n</div>\n";
        return f;
    });
})();
Kippt.Templates = Handlebars.templates;
(function() {
    var a = Object.prototype.hasOwnProperty,
        b = function(b, c) {
            for (var d in c) if (a.call(c, d)) b[d] = c[d];

            function e() {
                this.constructor = b;
            }
            e.prototype = c.prototype;
            b.prototype = new e();
            b.__super__ = c.prototype;
            return b;
        };
    $(function() {
        return Kippt.Router = (function(a) {
            b(c, a);

            function c() {
                c.__super__.constructor.apply(this, arguments);
            }
            c.prototype.routes = {
                'feed': 'feed',
                'inbox': 'inbox',
                'notifications': 'notifications',
                'search/:term': 'search',
                'search/:term/:page': 'search',
                ':username/:slug/clips/:id': 'clip',
                ':username/:slug/clips/:id/:mode': 'clip',
                ':username/:slug/:page': 'list',
                ':username/:slug': 'list',
                '/*': 'defaultRoute',
                ':notFound': 'notFound'
            };
            c.prototype.feed = function() {
                Kippt.page.show('app');
                return Kippt.appView.toggleFeed();
            };
            c.prototype.inbox = function() {
                return this.navigate('/' + Kippt.currentUser.get('username') + '/inbox', true);
            };
            c.prototype.notifications = function() {
                return Kippt.page.show('notifications');
            };
            c.prototype.list = function(a, b, c) {
                var d;
                d = Kippt.appView.lists.getByUserAndSlug(a, b);
                if (d) Kippt.appView.toggleList({
                    id: d.get('id'),
                    page: c,
                    search: false
                });
                else Kippt.appView.toggleList({
                    slug: b,
                    page: c,
                    search: false
                });
                return Kippt.page.show('app');
            };
            c.prototype.clip = function(a, b, c, d) {
                Kippt.appView.openClip(c, d);
                if (!Kippt.page.currentPage) {
                    Kippt.appView.toggleList({
                        slug: 'inbox',
                        search: false
                    });
                    return Kippt.page.show('app');
                }
            };
            c.prototype.search = function(a, b) {
                Kippt.appView.toggleList({
                    search: a,
                    page: b
                });
                return Kippt.page.show('app');
            };
            c.prototype.defaultRoute = function() {
                return this.navigate('/feed', true);
            };
            c.prototype.notFound = function() {
                return Kippt.page.show('not-found');
            };
            return c;
        })(Backbone.Router);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Page = (function(b) {
            c(d, b);

            function d() {
                this.loadIndex = a(this.loadIndex, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = 'body';
            d.prototype.pages = ['app', 'profile', 'notifications', 'not-found'];
            d.prototype.events = {
                'click .logo a': 'loadIndex'
            };
            d.prototype.loadIndex = function() {
                Kippt.app.navigate('/', true);
                return false;
            };
            d.prototype.show = function(a) {
                var b = this;
                this.currentPage = a;
                _.each(this.pages, function(a) {
                    return b.$el.removeClass(a);
                });
                return this.$el.addClass(a);
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.App = (function(b) {
            c(d, b);

            function d() {
                this.openClip = a(this.openClip, this);
                this.toggleList = a(this.toggleList, this);
                this.toggleFeed = a(this.toggleFeed, this);
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = '#app';
            d.prototype.template = Kippt.Templates.app;
            d.prototype.initialize = function() {
                this.lists = new Kippt.Collections.Lists();
                this.lists.reset(Kippt.Constants.LISTS_JSON);
                this.clips = new Kippt.Collections.Clips();
                this.notifications = Kippt.notifications;
                this.feedItems = new Kippt.Collections.FeedItems();
                this.currentList = false;
                return this.render();
            };
            d.prototype.render = function() {
                this.$el.html(this.template({
                    user: Kippt.currentUser.toJSON()
                }));
                this.listsView = new Kippt.Views.Lists({
                    el: this.$('#lists'),
                    collection: this.lists,
                    folders: Kippt.Constants.FOLDERS
                });
                this.clipsView = new Kippt.Views.Clips({
                    el: this.$('#clips'),
                    collection: this.clips
                });
                return this.feedView = new Kippt.Views.Feed({
                    el: this.$('#feed'),
                    collection: this.feedItems
                });
            };
            d.prototype.toggleFeed = function() {
                this.feedView.render();
                this.$('#clips').hide();
                this.$('#feed').show();
                return Kippt.app.navigate('feed', false);
            };
            d.prototype.toggleList = function(a) {
                var b, c, d, e, f, g, h, i;
                this.$('#feed').hide();
                this.$('#clips').show();
                if (!a) a = {};
                b = a.id;
                i = a.slug;
                g = a.page;
                h = a.search;
                this.clipsView.showLoading();
                if (h) {
                    h = decodeURI(h).replace(/%23/g, '#');
                    d = 'Search: ' + h;
                }
                if (b) {
                    c = this.lists.get(b);
                    e = '';
                    d = c.get('title');
                }
                if (i && _.contains(['read-later', 'starred', 'all'], i)) {
                    c = false;
                    e = i;
                    if (i === 'read-later') d = 'Read Later';
                    if (i === 'starred') d = 'Starred Clips';
                    if (i === 'all') d = 'All Clips';
                } else if (i && !b) {
                    c = this.lists.getBySlug(i);
                    e = '';
                    d = c.get('title');
                }
                if (this.listInfo) this.listInfo.undelegateEvents();
                this.listInfo = new Kippt.Views.ListInfo({
                    el: this.$('#list-info'),
                    model: c,
                    slug: i,
                    title: d,
                    search: h
                });
                if (this.listNewClip) this.listNewClip.undelegateEvents();
                if (h) this.$('#new-clip').html('');
                else this.listNewClip = new Kippt.Views.ListNewClip({
                    model: c,
                    collection: this.clips,
                    listType: e
                });
                this.currentList = c;
                document.title = d + ' - Kippt';
                if (h) this.clips.updateOptions({
                    search: h,
                    page: g
                });
                else this.clips.updateOptions({
                    list: c,
                    listType: e,
                    page: g
                });
                this.clips.fetch({
                    success: function(a) {
                        if (h && a.length === 0) return this.$('#no-search-results');
                        else return this.$('#clip-list').show();
                    }
                });
                if (h) f = '/search/' + encodeURIComponent(h);
                else if (_.contains(['read-later', 'starred', 'all'], i)) f = '/' + Kippt.currentUser.get('username') + '/' + i;
                else f = c.getAppUrl();
                if (g > 1) Kippt.app.navigate(f + '/' + g, false);
                else Kippt.app.navigate(f, false);
                return false;
            };
            d.prototype.openClip = function(a, b) {
                var c;
                c = new Kippt.Models.Clip({
                    id: a,
                    resource_uri: '/api/clips/' + a + '/'
                });
                return c.fetch({
                    success: function(a, c) {
                        var d;
                        d = Kippt.clipModalView;
                        d.model = a;
                        d.previousUrl = window.location.pathname;
                        if (b === 'reader') d.openReader();
                        if (b === 'edit') return d.openEdit();
                        else return d.openNotes();
                    }
                });
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.ListEditModal = (function(b) {
            c(d, b);

            function d() {
                this.saveList = a(this.saveList, this);
                this.hide = a(this.hide, this);
                this.show = a(this.show, this);
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = '#edit-list-modal';
            d.prototype.template = Kippt.Templates.list_edit_modal;
            d.prototype.events = {
                'click .close': 'hide',
                'click .cancel': 'hide',
                'submit form': 'saveList'
            };
            d.prototype.render = function() {
                if (this.model) this.$el.html(this.template(this.model.toJSON()));
                else this.$el.html(this.template({}));
                return this.show();
            };
            d.prototype.show = function() {
                return this.$el.show();
            };
            d.prototype.hide = function() {
                this.$el.hide();
                return this.undelegateEvents();
            };
            d.prototype.saveList = function(a) {
                var b, c, d, e, f, g, h = this;
                a.preventDefault();
                g = this.$('input[type=submit]');
                e = this.$('#list-create-name').val();
                b = this.$('#list-create-description').val();
                f = this.$("input[@name=list-sharing]:checked").val();
                if (f === 'public') c = false;
                else c = true;
                if (e.trim() === '') {
                    alert('List needs a name. Lets figure out something nice?');
                    return false;
                }
                if (this.model) this.model.save({
                    title: e,
                    description: b,
                    is_private: c
                }, {
                    success: function(a, b) {
                        h.hide();
                        return Kippt.app.navigate(a.getAppUrl(), true);
                    },
                    error: function() {
                        g.removeClass('disabled').val('Save list').removeAttr('disabled', 'disabled');
                        return alert('Something went wrong.');
                    }
                });
                else {
                    d = new Kippt.Models.List({
                        title: e,
                        description: b,
                        is_private: c,
                        user: Kippt.currentUser.toJSON,
                        collaborators: [],
                        urlRoot: '/api/lists'
                    });
                    d.save({}, {
                        success: function(a, b) {
                            if (!h.model) h.collection.add(a);
                            h.hide();
                            return Kippt.app.navigate(a.getAppUrl(), true);
                        },
                        error: function() {
                            g.removeClass('disabled').val('Create list').removeAttr('disabled', 'disabled');
                            return alert('Something went wrong.');
                        }
                    });
                }
                g.addClass('disabled').val('Saving...').attr('disabled', 'disabled');
                return false;
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Profile = (function(b) {
            c(d, b);

            function d() {
                this.setUser = a(this.setUser, this);
                this.render = a(this.render, this);
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = '#profile';
            d.prototype.template = Kippt.Templates.profile;
            d.prototype.initialize = function() {
                this.lists = new Kippt.Collections.Lists();
                this.clips = new Kippt.Collections.Clips();
                this.model = Kippt.profileUser;
                return this.model.on("change:id", this.render);
            };
            d.prototype.render = function() {
                var a;
                this.$el.html(this.template(this.model.toJSON()));
                a = new Kippt.Views.ProfileLists({
                    el: this.$('.lists'),
                    collection: this.lists
                });
                return '@clipsView = new Kippt.Views.Clips({\n    el: @$(\'#clips\')\n    collection: @clips\n})';
            };
            d.prototype.setUser = function(a) {
                this.model.set(a);
                return this.lists.reset(a.get('lists'));
            };
            'toggleList: (options) =>\n    options = {} if !options\n    slug = options.slug\n    page = options.page\n\n    # Clear sidebar selection\n    @listsView.selectList(slug)\n    # Clear \n    @clipsView.showLoading()\n    list = @lists.getBySlug(slug)\n    \n    # Update page title\n    document.title = list.get(\'title\') + \' - Kippt\'\n    \n    # Update collection\n    @clips.updateOptions({\n            list: list\n            page: page\n        })\n    @clips.fetch\n        success: (clips) ->\n            @$(\'#clip-list\').show()\n    \n    # Change url\n    listUrl = list.getAppUrl()\n    if page > 1\n        Kippt.app.navigate(listUrl+\'/\'+page, false)\n    else\n        Kippt.app.navigate(listUrl, false)\n    \n    return false';
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.NotFound = (function(b) {
            c(d, b);

            function d() {
                this.render = a(this.render, this);
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = '#not-found';
            d.prototype.template = Kippt.Templates.not_found;
            d.prototype.initialize = function() {
                return this.render();
            };
            d.prototype.render = function() {
                return this.$el.html(this.template({}));
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.ProfileLists = (function(b) {
            c(d, b);

            function d() {
                this.addAllLists = a(this.addAllLists, this);
                this.addList = a(this.addList, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.initialize = function(a) {
                if (!a) a = {};
                return this.collection.on("reset", this.addAllLists);
            };
            d.prototype.addList = function(a) {
                var b;
                b = new Kippt.Views.ListItem({
                    model: a
                });
                return this.$el.append(b.render().el);
            };
            d.prototype.addAllLists = function() {
                var a = this;
                this.collection.each(function(a) {
                    return a.set({
                        user: Kippt.profileUser.toJSON()
                    });
                });
                return this.collection.each(function(b) {
                    return a.addList(b);
                });
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Clip = (function(b) {
            c(d, b);

            function d() {
                this.draggable = a(this.draggable, this);
                this.like = a(this.like, this);
                this.edit = a(this.edit, this);
                this.notes = a(this.notes, this);
                this.reader = a(this.reader, this);
                this.star = a(this.star, this);
                this.readLater = a(this.readLater, this);
                this.data = a(this.data, this);
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.model = Kippt.Models.Clip;
            d.prototype.tagName = 'li';
            d.prototype.className = 'clip';
            d.prototype.template = Kippt.Templates.clip_item;
            d.prototype.events = {
                'click .notes': 'notes',
                'click .comment-count a': 'notes',
                'click .clip-like': 'like',
                'click .clip-edit': 'edit',
                'click .clip-destroy': 'destroy',
                'click .clip-reader': 'reader',
                'click .clip-star': 'star',
                'click .clip-read-later': 'readLater'
            };
            d.prototype.initialize = function() {
                this.model.on('change', this.render);
                this.model.on("reset", this.render);
                this.model.on('clear', this.clear);
                this.model.view = this;
                return this.clipLikeCount = this.model.get('likes').count;
            };
            d.prototype.render = function() {
                this.$el.html(this.template(this.data()));
                this.setContent();
                this.draggable();
                this.$el.attr('data-cid', this.model.cid);
                this.$el.find(".timeago").timeagoTiny();
                this.$('[rel=tooltip]').tooltip({
                    placement: 'bottom',
                    animation: false
                });
                return this;
            };
            d.prototype.data = function() {
                var a, b, c, d, e;
                if (typeof(this.model.get('list')) === 'string') d = Kippt.appView.lists.getByURI(this.model.get('list'));
                else d = Kippt.appView.lists.getByURI(this.model.get('list').resource_uri);
                if (this.model.get('user').id !== Kippt.currentUser.get('id')) a = this.model.get('user');
                if (this.model.get('user').id === Kippt.currentUser.get('id')) c = true;
                else if (this.model.get('likes') && this.model.get('likes').count) b = _.find(this.model.get('likes').data, function(a) {
                    if (a.id === Kippt.currentUser.id) return true;
                });
                if (!Kippt.appView.currentList) e = true;
                return _.extend(this.model.toJSON(), {
                    'fromUser': a,
                    'showList': e,
                    'isOwn': c,
                    'hasLiked': b,
                    'list': d.toJSON()
                });
            };
            d.prototype.remove = function() {
                return this.$el.remove();
            };
            d.prototype.setContent = function() {
                var a;
                a = this.model.get('title');
                this.$(".todo-content").text(a);
                this.input = this.$(".clip-input");
                this.input.on("blur", this.close);
                return this.input.val(a);
            };
            d.prototype.destroy = function() {
                if (confirm('Do you want to remove this clip?')) {
                    this.hideTooltips();
                    this.$el.hide();
                    this.collection.remove(this.model);
                    this.model.destroy();
                }
                return false;
            };
            d.prototype.hideTooltips = function() {
                return $('.tooltip').remove();
            };
            d.prototype.readLater = function() {
                var a;
                this.hideTooltips();
                if (this.model.get('is_read_later')) a = false;
                else a = true;
                this.model.save({
                    is_read_later: a
                }, {
                    error: function() {
                        return alert('Something went wrong');
                    }
                });
                this.render();
                return false;
            };
            d.prototype.star = function() {
                var a;
                this.hideTooltips();
                if (this.model.get('is_starred')) a = false;
                else a = true;
                this.model.save({
                    is_starred: a
                }, {
                    error: function() {
                        return alert('Something went wrong');
                    }
                });
                this.render();
                return false;
            };
            d.prototype.reader = function(a) {
                a.preventDefault();
                return Kippt.appView.openClip(this.model.get('id'), 'reader');
            };
            d.prototype.notes = function(a) {
                var b;
                b = a.target || a.srcElement;
                if (b.className !== 'hashtag') {
                    a.preventDefault();
                    return Kippt.appView.openClip(this.model.get('id'));
                }
            };
            d.prototype.edit = function(a) {
                var b;
                b = a.target || a.srcElement;
                if (b.className !== 'hashtag') {
                    a.preventDefault();
                    return Kippt.appView.openClip(this.model.get('id'), 'edit');
                }
            };
            d.prototype.like = function(a) {
                'Toggle clip like';
                var b, c;
                if (this.data().isOwn) return false;
                b = !this.$('.like').hasClass('liked');
                if (b) {
                    c = $.post(this.model.get('resource_uri') + 'likes/');
                    this.clipLikeCount++;
                } else {
                    c = $.ajax({
                        type: 'DELETE',
                        url: this.model.get('resource_uri') + 'likes/'
                    });
                    this.clipLikeCount--;
                }
                c.fail(function() {
                    return alert('Something went wrong.');
                });
                if (this.clipLikeCount === 0) this.$('.like span').text('Like');
                if (this.clipLikeCount > 1) this.$('.like span').text(this.clipLikeCount + ' Likes');
                if (this.clipLikeCount === 1) this.$('.like span').text(this.clipLikeCount + ' Like');
                this.$('.like').toggleClass('liked');
                return false;
            };
            d.prototype.draggable = function() {
                return this.$el.draggable({
                    handle: ".drag",
                    revert: "invalid",
                    helper: "clone",
                    cursor: "move"
                });
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Clips = (function(b) {
            c(d, b);

            function d() {
                this.toggleEmptyState = a(this.toggleEmptyState, this);
                this.hideLoading = a(this.hideLoading, this);
                this.showLoading = a(this.showLoading, this);
                this.addAllClips = a(this.addAllClips, this);
                this.addClip = a(this.addClip, this);
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.template = Kippt.Templates.clips;
            d.prototype.initialize = function() {
                this.collection.on("add", this.addClip);
                this.collection.on("add", this.toggleEmptyState);
                this.collection.on("remove", this.toggleEmptyState);
                this.collection.on("reset", this.addAllClips);
                this.collection.on("reset", this.hideLoading);
                this.collection.on("reset", this.toggleEmptyState);
                this.render();
                this.paginatedView = new Kippt.Views.Paginated({
                    collection: this.collection
                });
                return this.listLoading = new Kippt.Views.ListLoading({
                    el: this.$('.loading')
                });
            };
            d.prototype.render = function() {
                return this.$el.html(this.template());
            };
            d.prototype.addClip = function(a) {
                var b;
                b = new Kippt.Views.Clip({
                    model: a,
                    collection: this.collection
                });
                if (this.collection.search) return this.$('#clip-list').append(b.render().el);
                else return this.$('#clip-list').prepend(b.render().el);
            };
            d.prototype.addAllClips = function() {
                this.$('#clip-list').html('');
                return this.collection.each(this.addClip);
            };
            d.prototype.showLoading = function() {
                this.$('#clip-list').html('');
                this.$('#no-search-results').hide();
                this.$('#no-clips').hide();
                this.paginatedView.hide();
                return this.listLoading.show();
            };
            d.prototype.hideLoading = function() {
                this.listLoading.hide();
                return this.paginatedView.show();
            };
            d.prototype.toggleEmptyState = function() {
                this.$('#no-search-results').hide();
                this.$('#no-clips').hide();
                if (this.collection.search) {
                    if (this.collection.length === 0) return this.$('#no-search-results').show();
                } else if (this.collection.length === 0) return this.$('#no-clips').show();
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        },
        d = Array.prototype.indexOf ||
        function(a) {
            for (var b = 0, c = this.length; b < c; b++) if (b in this && this[b] === a) return b;
            return -1;
        };
    $(function() {
        return Kippt.Views.ClipModal = (function(b) {
            c(e, b);

            function e() {
                this.sendTo = a(this.sendTo, this);
                this.pocket = a(this.pocket, this);
                this.readability = a(this.readability, this);
                this.instapaper = a(this.instapaper, this);
                this.openShareWindow = a(this.openShareWindow, this);
                this.tumblr = a(this.tumblr, this);
                this.facebook = a(this.facebook, this);
                this.twitter = a(this.twitter, this);
                this.cancelNotes = a(this.cancelNotes, this);
                this.saveNotes = a(this.saveNotes, this);
                this.toggleEdit = a(this.toggleEdit, this);
                this.changeList = a(this.changeList, this);
                this.readLater = a(this.readLater, this);
                this.star = a(this.star, this);
                this.close = a(this.close, this);
                this.submitComment = a(this.submitComment, this);
                this.addComment = a(this.addComment, this);
                this.addAllComments = a(this.addAllComments, this);
                this.addAllLikes = a(this.addAllLikes, this);
                this.readerMode = a(this.readerMode, this);
                this.notesMode = a(this.notesMode, this);
                this.openNotes = a(this.openNotes, this);
                this.openEdit = a(this.openEdit, this);
                this.openReader = a(this.openReader, this);
                this.render = a(this.render, this);
                this.data = a(this.data, this);
                this.initialize = a(this.initialize, this);
                e.__super__.constructor.apply(this, arguments);
            }
            e.prototype.model = Kippt.Models.Clip;
            e.prototype.el = '#clip-modal';
            e.prototype.template = Kippt.Templates.clip_modal;
            e.prototype.events = {
                'click a.close': 'close',
                'click a.star': 'star',
                'click a.read-later': 'readLater',
                'click a.edit': 'notesMode',
                'change .lists select': 'changeList',
                'click a.notes-tab': 'notesMode',
                'click a.reader-tab': 'readerMode',
                'click a.toggle-edit': 'toggleEdit',
                'click a.add-notes': 'toggleEdit',
                'submit form.edit-clip': 'saveNotes',
                'click form.edit-clip .cancel': 'cancelNotes',
                'keyup input.item-title': 'trackChanges',
                'keyup input.item-url': 'trackChanges',
                'keyup textarea.item-notes': 'trackChanges',
                'click a.twitter': 'twitter',
                'click a.facebook': 'facebook',
                'click a.tumblr': 'tumblr',
                'click a.instapaper': 'instapaper',
                'click a.readability': 'readability',
                'click a.pocket': 'pocket',
                'submit form.new-comment': 'submitComment',
                'click .clip-like': 'like'
            };
            e.prototype.initialize = function() {
                return this.lists = Kippt.appView.lists;
            };
            e.prototype.data = function() {
                var a, b, c, e, f, g, h, i, j;
                h = new Kippt.Models.List(this.model.get('list'));
                if (h.get('collaborators').count) e = true;
                else e = false;
                if (h.get('user').id === Kippt.currentUser.get('id')) f = true;
                else f = false;
                if (this.model.get('user').id === Kippt.currentUser.get('id')) {
                    c = true;
                    g = true;
                } else {
                    c = false;
                    g = false;
                }
                i = Kippt.appView.lists.map(function(a) {
                    return a.id;
                });
                if (j = h.id, d.call(i, j) >= 0) a = true;
                else a = false;
                if (this.model.get('likes') && this.model.get('likes').count) {
                    b = _.find(this.model.get('likes').data, function(a) {
                        if (a.id === Kippt.currentUser.id) return true;
                    });
                } else b = false;
                return _.extend(this.model.toJSON(), {
                    list: h.toJSON(),
                    lists: Kippt.appView.lists.toJSON(),
                    isListOwner: f,
                    isListCollaborative: e,
                    isClipOwner: c,
                    currentUser: Kippt.currentUser.toJSON(),
                    canEdit: a,
                    hasLiked: b,
                    isOwn: g
                });
            };
            e.prototype.render = function() {
                var a, b, c = this;
                this.$el.html(this.template(this.data()));
                this.commentIds = [];
                this.addAllComments();
                this.clipLikeCount = this.model.get('likes').count;
                b = {
                    lines: 12,
                    length: 7,
                    width: 4,
                    radius: 10,
                    color: '#999',
                    speed: 1,
                    trail: 60,
                    shadow: false
                };
                this.spinner = new Spinner(b).spin();
                $('.comments-loading').html(this.spinner.el);
                $('.reader-loading').html(this.spinner.el);
                $("#reader-bg").click(function(a) {
                    return $(document).click(function(a) {
                        if (a.srcElement.id === 'reader-bg') return c.close();
                    });
                });
                $(document).bind('keydown', 'esc', this.close);
                this.scrollTop = document.body.scrollTop;
                $('html').css('overflow', 'hidden');
                this.$el.css('margin-top', this.scrollTop);
                this.$el.fadeIn();
                this.$('#reader-content img').each(function(a, b) {
                    if ($(b).width() <= 320) return $(b).addClass('inline');
                });
                this.$('#reader-content').show();
                this.$('.lists option[data-list-id=' + this.data().list.id + ']').attr('selected', 'selected');
                if (this.model.get('article')) {
                    a = new Kippt.Models.Article();
                    a.url = this.model.get('article');
                    a.fetch({
                        success: function() {
                            c.$('.reader-mode .title a').html(a.get('title'));
                            c.$('.reader-mode .body').html(a.get('html'));
                            return c.$('.reader-loading').remove();
                        }
                    });
                }
                this.$('[rel=tooltip]').tooltip({
                    placement: 'bottom',
                    animation: false
                });
                return this;
            };
            e.prototype.openReader = function() {
                this.render();
                return this.readerMode();
            };
            e.prototype.openEdit = function() {
                this.render();
                this.notesMode();
                return this.toggleEdit();
            };
            e.prototype.openNotes = function() {
                this.render();
                return this.notesMode();
            };
            e.prototype.notesMode = function() {
                this.$('#reader-content').addClass("notes");
                Kippt.app.navigate(this.model.get('app_url'), false);
                return false;
            };
            e.prototype.readerMode = function() {
                var a = this;
                _.defer(function() {
                    return a.$('#reader-content').removeClass("notes");
                });
                Kippt.app.navigate(this.model.get('app_url') + '/reader', false);
                return false;
            };
            e.prototype.addAllLikes = function() {
                var a = this;
                this.likes = this.model.get('likes').data;
                return _.each(this.likes, function(b) {
                    var c;
                    c = new Kippt.Views.ClipLike();
                    c.data = b;
                    return a.$(".like-list").append(c.render());
                });
            };
            e.prototype.addAllComments = function() {
                var a = this;
                this.comments = new Kippt.Collections.Comments(this.model.get('comments').data);
                this.comments.clip = this.model;
                this.comments.each(function(b) {
                    return a.addComment(b);
                });
                $('.comments').show();
                return $('.comments-loading').hide();
            };
            e.prototype.addComment = function(a) {
                var b;
                b = new Kippt.Views.ClipComment();
                b.commentData = a.toJSON();
                b.clipData = this.model.toJSON();
                this.$(".comment-list").append(b.render());
                this.$("abbr.timeago").timeago();
                this.commentIds.push(a.get('id'));
                return b;
            };
            e.prototype.submitComment = function(a) {
                var b, c, d = this;
                a.preventDefault();
                b = this.$('.new-comment textarea').val();
                if ($.trim(b).length === 0) return;
                c = new Kippt.Models.Comment({
                    body: b,
                    user: Kippt.currentUser.toJSON(),
                    urlRoot: this.comments.url()
                });
                this.$('.new-comment textarea').attr('disabled', 'disabled');
                return c.save({}, {
                    success: function(a, b) {
                        d.addComment(a);
                        d.$('.new-comment textarea').removeAttr('disabled');
                        d.$('.new-comment textarea').val('');
                        return d.$("abbr.timeago").timeago();
                    },
                    error: function() {
                        return d.$('.new-comment textarea').removeAttr('disabled');
                    }
                });
            };
            e.prototype.like = function(a) {
                'Toggle clip like';
                var b;
                if (this.data().isOwn) return false;
                b = !$(a.currentTarget).hasClass('liked');
                if (b) {
                    $.post(this.model.get('resource_uri') + 'likes/');
                    this.clipLikeCount++;
                } else {
                    $.ajax({
                        type: 'DELETE',
                        url: this.model.get('resource_uri') + 'likes/'
                    });
                    this.clipLikeCount--;
                }
                if (this.clipLikeCount === 0) $('span', a.currentTarget).text('Like');
                if (this.clipLikeCount > 1) $('span', a.currentTarget).text(this.clipLikeCount + ' Likes');
                if (this.clipLikeCount === 1) $('span', a.currentTarget).text(this.clipLikeCount + ' Like');
                $(a.currentTarget).toggleClass('liked');
                return false;
            };
            e.prototype.close = function() {
                this.$el.hide();
                this.$el.html('');
                $('html').css('overflow', 'auto');
                $(document).unbind('keydown', this.close);
                if (this.previousUrl) Kippt.app.navigate(this.previousUrl, false);
                else window.history.back();
                return false;
            };
            e.prototype.star = function() {
                var a;
                if (this.model.get('is_starred')) a = false;
                else a = true;
                this.model.save({
                    is_starred: a
                }, {
                    error: function() {
                        return alert('Something went wrong');
                    }
                });
                $('.star.button').toggleClass("starred");
                return false;
            };
            e.prototype.readLater = function() {
                var a;
                if (this.model.get('is_read_later')) a = false;
                else a = true;
                this.model.save({
                    is_read_later: a
                }, {
                    error: function() {
                        return alert('Something went wrong');
                    }
                });
                $('.read-later.button').toggleClass("is-read-later");
                return false;
            };
            e.prototype.changeList = function(a) {
                var b, c, d, e = this;
                d = this.data().list.id;
                c = this.$('.lists option:selected').attr('data-list-id');
                b = this.lists.get(c);
                this.model.save({
                    list: b.get('resource_uri')
                }, {
                    success: function() {
                        if (c !== d) return e.model.view.remove();
                    },
                    error: function() {
                        return alert('Something went wrong');
                    }
                });
                return false;
            };
            e.prototype.toggleEdit = function() {
                this.$('.toggle-edit').toggle();
                this.$('.notes-edit').toggle();
                this.$('.notes-content').toggle();
                this.$('.comments').toggle();
                if (this.$('.notes-edit').is(":visible")) this.notesModified = false;
                else {}
                return false;
            };
            e.prototype.saveNotes = function() {
                var a, b, c, d, e = this;
                c = this.$('.notes-mode input.item-title').val();
                d = this.$('.notes-mode input.item-url').val();
                a = this.$('.notes-mode textarea.item-notes').val();
                b = this.$('.save');
                b.addClass('disabled').attr('disabled', 'disabled').val('Saving...');
                this.model.save({
                    title: c,
                    url: d,
                    notes: a
                }, {
                    success: function() {
                        return e.openNotes();
                    },
                    error: function() {
                        return alert('Something went wrong');
                    }
                });
                return false;
            };
            e.prototype.trackChanges = function() {
                this.notesModified = true;
                return false;
            };
            e.prototype.cancelNotes = function() {
                if (this.notesModified === true) {
                    if (confirm('Are you sure you want to discard changes?')) {
                        this.$('.notes-mode input.item-title').val(this.model.get('title'));
                        this.$('.notes-mode input.item-url').val(this.model.get('url'));
                        this.$('.notes-mode textarea.item-notes').val(this.model.get('notes'));
                        this.toggleEdit();
                    }
                } else this.toggleEdit();
                return false;
            };
            e.prototype.twitter = function(a) {
                var b;
                b = 'http://twitter.com/share?url=' + encodeURIComponent(this.model.get('url')) + '&text=' + encodeURIComponent(this.model.get('title')) + '&via=kippt';
                return this.openShareWindow(b, 550, 450);
            };
            e.prototype.facebook = function() {
                var a;
                a = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(this.model.get('url')) + '&t=' + encodeURIComponent(this.model.get('title'));
                return this.openShareWindow(a, 550, 360);
            };
            e.prototype.tumblr = function() {
                var a;
                a = 'http://www.tumblr.com/share?u=' + encodeURIComponent(this.model.get('url')) + '&t=' + encodeURIComponent(this.model.get('title')) + '&v=3';
                return this.openShareWindow(a, 550, 450);
            };
            e.prototype.openShareWindow = function(a, b, c) {
                window.open(a, 'shareBox', 'width=' + b + ',height=' + c + ',toolbar=no');
                return false;
            };
            e.prototype.instapaper = function(a) {
                return this.sendTo(a, 'instapaper');
            };
            e.prototype.readability = function(a) {
                return this.sendTo(a, 'readability');
            };
            e.prototype.pocket = function(a) {
                return this.sendTo(a, 'pocket');
            };
            e.prototype.sendTo = function(a, b) {
                var c;
                if (Kippt.Constants[b.toUpperCase()]) {
                    a.preventDefault();
                    c = $.ajax({
                        url: "/api/services/" + b + "/",
                        type: "POST",
                        data: JSON.stringify({
                            url: this.model.get('url')
                        }),
                        dataType: "json"
                    });
                    c.fail(function(a, b, c) {
                        return alert('Error when submitting to service. Did you switch your password?');
                    });
                    this.$(a.currentTarget).closest('.open').removeClass('open');
                    return false;
                } else return true;
            };
            return e;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.ListItem = (function(b) {
            c(d, b);

            function d() {
                this.droppable = a(this.droppable, this);
                this.data = a(this.data, this);
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.model = Kippt.Models.List;
            d.prototype.tagName = 'li';
            d.prototype.className = 'list';
            d.prototype.template = Kippt.Templates.list_item;
            d.prototype.initialize = function() {
                this.model.on('change', this.render);
                this.model.on('reset', this.render);
                return this.model.view = this;
            };
            d.prototype.render = function() {
                this.$el.html(this.template(this.data()));
                this.$el.attr('id', 'list-' + this.model.id);
                this.$el.data('list-id', this.model.id);
                this.droppable();
                return this;
            };
            d.prototype.data = function() {
                var a, b;
                if (this.model.get('collaborators').count) a = true;
                else a = false;
                if (this.model.get('user').id === Kippt.currentUser.get('id')) b = true;
                else b = false;
                return _.extend(this.model.toJSON(), {
                    listUrl: this.model.getAppUrl(),
                    isCollaborative: a,
                    isOwner: b
                });
            };
            d.prototype.remove = function() {
                return this.$el.remove();
            };
            d.prototype.droppable = function() {
                var a;
                a = this;
                return this.$el.droppable({
                    accept: '#clip-list > li',
                    hoverClass: 'ui-state-hover',
                    activeClass: 'ui-state-highlight',
                    tolerance: 'pointer',
                    drop: function(b, c) {
                        var d, e, f;
                        d = $(c.draggable).attr('data-cid');
                        e = Kippt.appView.clips.getByCid(d);
                        f = a.model;
                        $(e.view.el).fadeOut();
                        return e.save({
                            list: f.get('resource_uri')
                        }, {
                            success: function() {
                                if (Kippt.appView.currentList) e.view.remove();
                                return e.fetch();
                            },
                            error: function() {
                                alert('Something went wrong!');
                                return $(e.view.el).show();
                            }
                        });
                    }
                });
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Lists = (function(b) {
            c(d, b);

            function d() {
                this.newList = a(this.newList, this);
                this.selectList = a(this.selectList, this);
                this.refreshList = a(this.refreshList, this);
                this.addAllLists = a(this.addAllLists, this);
                this.addList = a(this.addList, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.events = {
                'click .add-list': 'newList',
                'click .list a': 'refreshList'
            };
            d.prototype.initialize = function(a) {
                if (!a) a = {};
                this.folders = a.folders;
                this.collection.on("add", this.addList);
                this.collection.on("reset", this.addAllLists);
                this.collection.on('destroy', this.removeList);
                this.collection.view = this;
                this.views = _([]);
                this.initScrollableList();
                return this.addAllLists();
            };
            d.prototype.addList = function(a) {
                var b;
                b = new Kippt.Views.ListItem({
                    model: a
                });
                this.views.push(b);
                if (a.get('slug') === 'inbox') {
                    this.$('#system-lists').append(b.render().el);
                    return b.$el.find('.list-link').addClass('type-inbox');
                } else return this.$('#user-lists').append(b.render().el);
            };
            d.prototype.addAllLists = function() {
                var a, b, c, d;
                this.addList(this.collection.getBySlug('inbox'));
                d = this.folders;
                for (b = 0, c = d.length; b < c; b++) {
                    a = d[b];
                    this.addList(this.collection.get(a));
                }
                return this.sortableLists();
            };
            d.prototype.refreshList = function(a) {
                var b, c;
                a.preventDefault();
                b = $(a.currentTarget).attr('data-list-id');
                c = $(a.currentTarget).attr('data-list-slug');
                return Kippt.appView.toggleList({
                    id: b,
                    slug: c
                });
            };
            d.prototype.selectList = function(a) {
                this.$('a').removeClass('selected');
                if (slug) return this.$el.find('a[data-list-id=' + a + ']').addClass('selected');
            };
            d.prototype.newList = function() {
                var a;
                a = new Kippt.Views.ListEditModal({
                    collection: this.collection
                });
                a.render();
                return false;
            };
            d.prototype.removeList = function(a) {
                a.view.remove();
                return Kippt.app.navigate('/', true);
            };
            d.prototype.sortableLists = function() {
                return $('#user-lists').sortable({
                    opacity: 0.6,
                    cursor: 'move',
                    axis: 'y',
                    update: function(a, b) {
                        var c, d, e;
                        d = $(b.item).first().data('list-id');
                        c = $(this).sortable('toArray');
                        e = c.indexOf('list-' + d);
                        return $.ajax({
                            type: 'POST',
                            url: '/api/folders/',
                            data: '{"list_id":' + d + ', "position": ' + e + '}',
                            dataType: 'json'
                        });
                    }
                });
            };
            d.prototype.initScrollableList = function() {
                return $(window).scroll(function() {
                    if (window.pageYOffset >= 88 && $('#clips').height() >= $('#sidebar').height()) return $('#lists').css('position', 'fixed');
                    else return $('#lists').css('position', 'relative');
                });
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.ListInfo = (function(b) {
            c(d, b);

            function d() {
                this.share = a(this.share, this);
                this.deleteList = a(this.deleteList, this);
                this.editList = a(this.editList, this);
                this.togglePrivate = a(this.togglePrivate, this);
                this.data = a(this.data, this);
                this.render = a(this.render, this);
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.template = Kippt.Templates.list_info;
            d.prototype.events = {
                'click .toggle-private': 'togglePrivate',
                'click .edit': 'editList',
                'click .delete': 'deleteList',
                'click .share': 'share'
            };
            d.prototype.initialize = function(a) {
                if (!a) a = {};
                this.slug = a.slug;
                this.title = a.title;
                this.search = a.search;
                if (this.model) this.model.on('change', this.render);
                return this.render();
            };
            d.prototype.render = function() {
                return this.$el.html(this.template(this.data()));
            };
            d.prototype.data = function() {
                var a, b, c;
                if (this.model) {
                    c = this.model.get('rss_url');
                    if (this.model.get('slug') === 'inbox' || this.model.get('slug') === 'read-later') b = true;
                    else b = false;
                } else if (this.slug) {
                    if (this.slug === 'all') c = Kippt.Constants.ALL_CLIPS_RSS;
                    if (this.slug === 'starred') c = Kippt.Constants.STARRED_CLIPS_RSS;
                    if (this.slug === 'read-later') c = Kippt.Constants.READ_LATER_CLIPS_RSS;
                    b = true;
                }
                a = {
                    title: this.title,
                    search: this.search,
                    'system-list': b,
                    rss_url: c
                };
                if (this.model) {
                    a.model = this.model.toJSON();
                    if (this.model.get('user').id === Kippt.currentUser.get('id')) a.isOwner = true;
                    else a.isOwner = false;
                }
                return a;
            };
            d.prototype.togglePrivate = function() {
                if (this.model.get('is_private') === true) this.model.save({
                    is_private: false
                });
                else this.model.save({
                    is_private: true
                });
                return false;
            };
            d.prototype.editList = function() {
                var a;
                this.$('li.btn-group').removeClass('open');
                a = new Kippt.Views.ListEditModal({
                    model: this.model
                });
                a.render();
                return false;
            };
            d.prototype.deleteList = function() {
                if (confirm('Are you sure you want to delete this list? WARNING: All clips in this list will be removed')) this.model.destroy();
                return false;
            };
            d.prototype.share = function() {
                var a;
                a = new Kippt.Views.ListSharingModal();
                a.model = this.model;
                a.render();
                return false;
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.ListNewClip = (function(b) {
            c(d, b);

            function d() {
                this.render = a(this.render, this);
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = '#new-clip';
            d.prototype.template = Kippt.Templates.list_new_clip;
            d.prototype.events = {
                'keypress input': 'createOnEnter'
            };
            d.prototype.initialize = function(a) {
                this.listType = a.listType;
                $(document).bind('keyup', 'a', this.addClipFocus);
                return this.render();
            };
            d.prototype.render = function() {
                return this.$el.html(this.template());
            };
            d.prototype.addClipFocus = function() {
                return this.$('input').focus();
            };
            d.prototype.createOnEnter = function(a) {
                var b, c, d, e = this;
                b = this.$('input');
                if (a.keyCode !== 13 || b.val() === '') return;
                d = b.val().trim();
                if (d.indexOf('http://') !== 0 && d.indexOf('https://') !== 0) d = 'http://' + d;
                if (!validateURL(d)) {
                    alert('This doesn\'t look like an URL for us.');
                    return false;
                }
                b.val('Loading...');
                b.attr('disabled', 'disabled');
                c = new Kippt.Models.Clip({
                    url: d,
                    user: Kippt.currentUser.toJSON(),
                    urlRoot: this.collection.url()
                });
                if (this.model) c.set({
                    list: this.model.get('resource_uri')
                });
                if (this.listType === 'read-later') c.set({
                    is_read_later: true
                });
                if (this.listType === 'starred') c.set({
                    is_starred: true
                });
                return c.save({}, {
                    success: function(a, d) {
                        var f;
                        f = a.get('list').resource_uri;
                        c.set({
                            list: f
                        });
                        e.collection.add(a);
                        b.removeAttr('disabled');
                        return b.val('');
                    },
                    error: function() {
                        c.view.remove();
                        b.removeAttr('disabled');
                        b.val('');
                        return alert('Something went wrong while saving this page. Are you sure the address is right?');
                    }
                });
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.ListLoading = (function(b) {
            c(d, b);

            function d() {
                this.hide = a(this.hide, this);
                this.show = a(this.show, this);
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.initialize = function() {
                var a;
                a = {
                    lines: 12,
                    length: 7,
                    width: 4,
                    radius: 10,
                    color: '#999',
                    speed: 1,
                    trail: 60,
                    shadow: false
                };
                this.spinner = new Spinner(a).spin();
                return this.$el.html(this.spinner.el);
            };
            d.prototype.show = function() {
                return this.$el.show();
            };
            d.prototype.hide = function() {
                return this.$el.hide();
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.ListSharingModal = (function(b) {
            c(d, b);

            function d() {
                this.close = a(this.close, this);
                this.leaveList = a(this.leaveList, this);
                this.removeCollaborator = a(this.removeCollaborator, this);
                this.addCollaborator = a(this.addCollaborator, this);
                this.addAllCollaborators = a(this.addAllCollaborators, this);
                this.showInviteError = a(this.showInviteError, this);
                this.inviteCollaborator = a(this.inviteCollaborator, this);
                this.openShareWindow = a(this.openShareWindow, this);
                this.facebook = a(this.facebook, this);
                this.twitter = a(this.twitter, this);
                this.data = a(this.data, this);
                this.render = a(this.render, this);
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = '#list-sharing-modal';
            d.prototype.template = Kippt.Templates.list_sharing_modal;
            d.prototype.events = {
                'click .close': 'close',
                'click .cancel': 'close',
                'click .leave': 'leaveList',
                'click .remove': 'removeCollaborator',
                'submit .invite': 'inviteCollaborator',
                'click .twitter': 'twitter',
                'click .facebook': 'facebook',
                'click .copy-url': 'copyUrl'
            };
            d.prototype.initialize = function() {
                return this.collaboratorIds = [];
            };
            d.prototype.render = function() {
                this.$el.html(this.template(this.data()));
                this.$el.show();
                return this.addAllCollaborators();
            };
            d.prototype.data = function() {
                var a, b;
                if (Kippt.currentUser.get('id') === this.model.get('user').id) a = true;
                b = 'https://kippt.com/' + this.model.get('user').username + '/' + this.model.get('slug');
                return _.extend(this.model.toJSON(), {
                    'isOwner': a,
                    'list_url': b
                });
            };
            d.prototype.twitter = function(a) {
                var b;
                b = 'http://twitter.com/share?url=' + encodeURIComponent(this.data().list_url) + '&text=' + encodeURIComponent(this.data().title + ' by ' + this.data().user.username) + '&via=kippt';
                return this.openShareWindow(b, 550, 450);
            };
            d.prototype.facebook = function() {
                var a;
                a = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(this.data().list_url) + '&t=' + encodeURIComponent(this.data().title + ' by ' + this.data().user.username);
                return this.openShareWindow(a, 550, 360);
            };
            d.prototype.openShareWindow = function(a, b, c) {
                window.open(a, 'shareBox', 'width=' + b + ',height=' + c + ',toolbar=no');
                return false;
            };
            d.prototype.copyUrl = function(a) {
                this.$(a.currentTarget).focus();
                return this.$(a.currentTarget).select();
            };
            d.prototype.inviteCollaborator = function(a) {
                var b, c, d = this;
                a.preventDefault();
                b = this.$('form.invite input[type=text]').val();
                this.$('.status').html('Sending...');
                c = $.ajax({
                    type: 'POST',
                    url: this.model.get('resource_uri') + 'collaborators/',
                    data: JSON.stringify({
                        action: 'invite',
                        data: b
                    }),
                    dataType: 'json'
                });
                c.success(function(a) {
                    d.$('form.invite input[type=text]').val('');
                    d.$('.status').html('Done');
                    setTimeout((function() {
                        return this.$('.status').html('');
                    }), 1000);
                    return _.each(a, function(a) {
                        if (!_.contains(d.collaboratorIds, a.id)) return d.addCollaborator(a);
                    });
                });
                return c.error(function(a, b) {
                    var c;
                    c = a.responseText.message;
                    return d.showInviteError(c);
                });
            };
            d.prototype.showInviteError = function(a) {
                var b;
                b = this.$('form.invite .error');
                b.html(a);
                b.show();
                return setTimeout(function() {
                    return b.fadeOut();
                }, 1000);
            };
            d.prototype.addAllCollaborators = function() {
                var a = this;
                _.each(this.data().collaborators.objects, function(b) {
                    if (!_.contains(a.collaboratorIds, b.id)) return a.addCollaborator(b);
                });
                return false;
            };
            d.prototype.addCollaborator = function(a) {
                var b;
                b = new Kippt.Views.ListSharingCollaborator();
                b.data = a;
                if (this.data().isOwner) b.data.isOwner = true;
                if (Kippt.currentUser.get('id') === a.id) b.data.isMe = true;
                this.$("ul.collaborators").append(b.render());
                this.collaboratorIds.push(a.id);
                return this.model.fetch();
            };
            d.prototype.removeCollaborator = function(a) {
                var b, c, d, e = this;
                a.preventDefault();
                c = $(a.currentTarget).closest('li');
                b = parseInt($(c).attr('data-user-id'));
                $(c).fadeOut();
                d = $.post(this.model.get('resource_uri') + 'collaborators/', JSON.stringify({
                    action: 'remove',
                    data: b
                }));
                d.success(function() {
                    e.collaboratorIds = _.without(e.collaboratorIds, b);
                    $(c).remove();
                    return e.model.fetch();
                });
                return d.error(function() {
                    alert('Something went wrong.');
                    return $(c).show();
                });
            };
            d.prototype.leaveList = function() {
                var a, b = this;
                if (confirm('Are you sure you want to leave this list?')) {
                    a = $.post(this.model.get('resource_uri') + 'collaborators/', JSON.stringify({
                        action: 'remove',
                        data: Kippt.currentUser.get('id')
                    }));
                    a.success(function() {
                        return window.location.href = '/';
                    });
                    a.error(function() {
                        return alert('Something went wrong.');
                    });
                }
                return false;
            };
            d.prototype.close = function(a) {
                a.preventDefault();
                this.$el.hide();
                return this.undelegateEvents();
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.ListSharingCollaborator = (function(b) {
            c(d, b);

            function d() {
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.tagName = 'li';
            d.prototype.render = function() {
                this.$el.html(Kippt.Templates.list_sharing_collaborator(this.data));
                return this.$el.attr({
                    'data-user-id': this.data.id
                });
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Paginated = (function(b) {
            c(d, b);

            function d() {
                this.pageChange = a(this.pageChange, this);
                this.pageInput = a(this.pageInput, this);
                this.next = a(this.next, this);
                this.previous = a(this.previous, this);
                this.hide = a(this.hide, this);
                this.show = a(this.show, this);
                this.scrollToTop = a(this.scrollToTop, this);
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = '.pagination';
            d.prototype.template = Kippt.Templates.pagination;
            d.prototype.events = {
                'click a.prev': 'previous',
                'click a.next': 'next',
                'click .page-input .link': 'pageInput',
                'submit .page-input': 'pageChange'
            };
            d.prototype.initialize = function() {
                this.collection.on("add", this.render);
                this.collection.on("change", this.render);
                return this.collection.on("reset", this.render);
            };
            d.prototype.render = function() {
                return this.$el.html(this.template(this.collection.pageInfo()));
            };
            d.prototype.scrollToTop = function() {
                return $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
            };
            d.prototype.show = function() {
                return this.$el.show();
            };
            d.prototype.hide = function() {
                return this.$el.hide();
            };
            d.prototype.previous = function() {
                this.scrollToTop();
                this.collection.previousPage();
                return false;
            };
            d.prototype.next = function() {
                this.scrollToTop();
                this.collection.nextPage();
                return false;
            };
            d.prototype.pageInput = function() {
                this.$('.link').addClass('hidden');
                this.$('.page').removeClass('hidden');
                return this.$('.page').focus();
            };
            d.prototype.pageChange = function() {
                var a;
                a = this.$('.page-input .page').val();
                if (isNaN(parseInt(a, 10)) || a <= 0) {
                    alert('Invalid page number - Think positive');
                    return false;
                }
                this.scrollToTop();
                if (a > this.collection.pageInfo().pages) this.collection.page(this.collection.pageInfo().pages);
                else this.collection.page(a);
                return false;
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Search = (function(b) {
            c(d, b);

            function d() {
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = "#search-form";
            d.prototype.events = {
                'keypress input': 'searchByForm'
            };
            d.prototype.initialize = function() {
                return this.searchField = this.$('#search');
            };
            d.prototype.searchByForm = function(a) {
                a.preventDefault;
                if (a.keyCode !== 13) return;
                this.search(this.searchField.val());
                return false;
            };
            d.prototype.search = function(a) {
                Kippt.app.navigate('/search/' + encodeURIComponent(a), true);
                return false;
            };
            d.prototype.clear = function() {
                return this.searchField.val('');
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Notifications = (function(b) {
            c(d, b);

            function d() {
                this.addNotification = a(this.addNotification, this);
                this.addAllNotifications = a(this.addAllNotifications, this);
                this.render = a(this.render, this);
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.el = '#notifications';
            d.prototype.template = Kippt.Templates.notifications;
            d.prototype.initialize = function() {
                this.render();
                return this.addAllNotifications();
            };
            d.prototype.render = function() {
                return this.$el.html(this.template({}));
            };
            d.prototype.addAllNotifications = function() {
                return this.collection.each(this.addNotification);
            };
            d.prototype.addNotification = function(a) {
                var b, c, d, e, f;
                d = Date.today().toString("d-MMM-yy");
                f = Date.today().add(-1).days().toString("d-MMM-yy");
                c = a.getDate().toString("d-MMM-yy");
                if (c !== this.date) {
                    if (c === d) b = 'Today';
                    else if (c === f) b = 'Yesterday';
                    else b = a.getDate().toString("d. MMMM");
                    this.date = a.getDate().toString("d-MMM-yy");
                    this.$('ul.notifications').append('<li class="timestamp">' + b + '</li>');
                }
                e = new Kippt.Views.Notification({
                    model: a
                });
                return this.$('ul.notifications').append(e.render().el);
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Notification = (function(b) {
            c(d, b);

            function d() {
                this.openLink = a(this.openLink, this);
                this.data = a(this.data, this);
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.tagName = 'li';
            d.prototype.events = {
                'click a': 'openLink'
            };
            d.prototype.render = function() {
                if (this.model.get('type') === 'new_clip') this.$el.html(Kippt.Templates.notification_clip(this.data()));
                if (this.model.get('type') === 'new_comment') this.$el.html(Kippt.Templates.notification_comment(this.data()));
                if (this.model.get('type') === 'clip_like') this.$el.html(Kippt.Templates.notification_like(this.data()));
                this.$el.addClass(this.model.get('type'));
                return this;
            };
            d.prototype.data = function() {
                return _.extend(this.model.toJSON(), {});
            };
            d.prototype.openLink = function(a) {
                Kippt.app.navigate(this.model.get('item_url'), true);
                return false;
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.Feed = (function(b) {
            c(d, b);

            function d() {
                this.loadMore = a(this.loadMore, this);
                this.addFeedItem = a(this.addFeedItem, this);
                this.addAllFeedItems = a(this.addAllFeedItems, this);
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.template = Kippt.Templates.feed;
            d.prototype.events = {
                'click .load-more a': 'loadMore'
            };
            d.prototype.render = function() {
                var a;
                this.$el.html(this.template({}));
                a = {
                    lines: 12,
                    length: 7,
                    width: 4,
                    radius: 10,
                    color: '#999',
                    speed: 1,
                    trail: 60,
                    shadow: false
                };
                this.spinner = new Spinner(a).spin();
                this.$('.loading').html(this.spinner.el);
                this.$('.no-feed').hide();
                return this.addAllFeedItems();
            };
            d.prototype.addAllFeedItems = function() {
                var a = this;
                return this.collection.fetch({
                    newLoad: true,
                    success: function(b) {
                        a.collection.each(a.addFeedItem);
                        a.$('.loading').hide();
                        a.$('.load-more').show();
                        if (a.collection.length === 0) {
                            a.$('.no-feed').show();
                            return a.$('.load-more').hide();
                        }
                    }
                });
            };
            d.prototype.addFeedItem = function(a) {
                var b;
                b = new Kippt.Views.FeedItem({
                    model: a
                });
                return this.$('.feed-list').append(b.render().el);
            };
            d.prototype.loadMore = function() {
                var a = this;
                this.$('.load-more').addClass('loading-feed');
                this.collection.fetch({
                    success: function(b) {
                        b.each(a.addFeedItem);
                        return a.$('.load-more').removeClass('loading-feed');
                    }
                });
                return false;
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.FeedItem = (function(b) {
            c(d, b);

            function d() {
                this.submitComment = a(this.submitComment, this);
                this.openClip = a(this.openClip, this);
                this.addComment = a(this.addComment, this);
                this.addAllComments = a(this.addAllComments, this);
                this.data = a(this.data, this);
                this.render = a(this.render, this);
                this.initialize = a(this.initialize, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.tagName = 'li';
            d.prototype.template = Kippt.Templates.feed_clip;
            d.prototype.events = {
                'click .clip-link': 'openClip',
                'click .clip-save': 'saveClip',
                'click .clip-like': 'likeClip',
                'submit .add-comment': 'submitComment'
            };
            d.prototype.initialize = function() {
                this.comments = new Kippt.Collections.Comments({
                    clip: this.model
                });
                this.comments.reset(this.model.get('comments').data);
                return this.clipLikeCount = this.model.get('likes').count;
            };
            d.prototype.render = function() {
                this.$el.html(this.template(this.data()));
                this.$("abbr.timeago").timeago();
                if (this.comments.length) {
                    this.addAllComments();
                    this.$el.addClass('has-comments');
                }
                this.$('[rel=tooltip]').tooltip({
                    placement: 'bottom'
                });
                return this;
            };
            d.prototype.data = function() {
                var a, b;
                if (this.model.get('user').id === Kippt.currentUser.get('id')) b = true;
                if (this.model.get('likes') && this.model.get('likes').count) a = _.find(this.model.get('likes').data, function(a) {
                    if (a.id === Kippt.currentUser.id) return true;
                });
                return _.extend(this.model.toJSON(), {
                    currentUser: Kippt.currentUser.toJSON(),
                    isOwn: b,
                    hasLiked: a
                });
            };
            d.prototype.addAllComments = function() {
                var a;
                if (this.comments.length >= 3) {
                    this.$('.all-comments').css('display', 'block');
                    a = new Kippt.Collections.Comments(this.comments.rest(this.comments.length - 2));
                    return a.each(this.addComment);
                } else return this.comments.each(this.addComment);
            };
            d.prototype.addComment = function(a) {
                var b;
                b = new Kippt.Views.FeedComment({
                    model: a
                });
                return this.$('.feed-comments ul').append(b.render().el);
            };
            d.prototype.openClip = function() {
                var a;
                a = Kippt.clipModalView;
                a.model = this.model;
                a.previousUrl = window.location.pathname;
                a.openNotes();
                return false;
            };
            d.prototype.saveClip = function(a) {
                'Open a popup for link saving';
                var b, c, d, e, f;
                b = {
                    'url': this.model.get('url'),
                    'title': this.model.get('title'),
                    'source': 'kippt_feed',
                    'via': this.model.get('resource_uri')
                };
                for (e = 0, f = b.length; e < f; e++) {
                    c = b[e];
                    b[c] = encodeURIComponent(b[c]);
                }
                d = "/extensions/new" + "?url=" + b.url + "&title=" + b.title + "&source=" + b.source + "&via=" + b.via;
                window.open(d, "kippt-popup", "location=no,menubar=no,status=no,titlebar=no,scrollbars=no,width=420,height=240");
                return false;
            };
            d.prototype.likeClip = function(a) {
                'Toggle clip like';
                var b;
                if (this.data().isOwn) return false;
                b = !$(a.currentTarget).hasClass('liked');
                if (b) {
                    $.post(this.model.get('resource_uri') + 'likes/');
                    this.clipLikeCount++;
                } else {
                    $.ajax({
                        type: 'DELETE',
                        url: this.model.get('resource_uri') + 'likes/'
                    });
                    this.clipLikeCount--;
                }
                if (this.clipLikeCount === 0) $('span', a.currentTarget).text('Like');
                if (this.clipLikeCount > 1) $('span', a.currentTarget).text(this.clipLikeCount + ' Likes');
                if (this.clipLikeCount === 1) $('span', a.currentTarget).text(this.clipLikeCount + ' Like');
                $(a.currentTarget).toggleClass('liked');
                return false;
            };
            d.prototype.submitComment = function(a) {
                var b, c, d = this;
                a.preventDefault();
                b = this.$('.add-comment input').val();
                c = new Kippt.Models.Comment({
                    body: b,
                    user: Kippt.currentUser.toJSON(),
                    urlRoot: this.comments.url()
                });
                this.$('.add-comment input').attr('disabled', 'disabled');
                return c.save({}, {
                    success: function(a, b) {
                        d.addComment(a);
                        d.$('.add-comment input').removeAttr('disabled');
                        d.$('.add-comment input').val('');
                        return d.$("abbr.timeago").timeagoTiny();
                    },
                    error: function() {
                        return d.$('.add-comment input').removeAttr('disabled');
                    }
                });
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    },
        b = Object.prototype.hasOwnProperty,
        c = function(a, c) {
            for (var d in c) if (b.call(c, d)) a[d] = c[d];

            function e() {
                this.constructor = a;
            }
            e.prototype = c.prototype;
            a.prototype = new e();
            a.__super__ = c.prototype;
            return a;
        };
    $(function() {
        return Kippt.Views.FeedComment = (function(b) {
            c(d, b);

            function d() {
                this.render = a(this.render, this);
                d.__super__.constructor.apply(this, arguments);
            }
            d.prototype.tagName = 'li';
            d.prototype.template = Kippt.Templates.feed_comment;
            d.prototype.render = function() {
                this.$el.html(this.template(this.model.toJSON()));
                this.$("abbr.timeago").timeago();
                return this;
            };
            return d;
        })(Backbone.View);
    });
}).call(this);
(function() {
    $(function() {
        Kippt.currentUser = new Kippt.Models.User(Kippt.Constants.USER_JSON);
        Kippt.profileUser = new Kippt.Models.User();
        Kippt.lists = new Kippt.Collections.Lists();
        Kippt.clips = new Kippt.Collections.Clips();
        Kippt.notifications = new Kippt.Collections.Notifications(Kippt.Constants.NOTIFICATIONS_JSON);
        Kippt.page = new Kippt.Views.Page();
        Kippt.appView = new Kippt.Views.App();
        Kippt.profileView = new Kippt.Views.Profile();
        Kippt.notFoundView = new Kippt.Views.NotFound();
        Kippt.notificationsView = new Kippt.Views.Notifications({
            el: $('#notifications'),
            collection: Kippt.notifications
        });
        Kippt.searchView = new Kippt.Views.Search();
        Kippt.clipModalView = new Kippt.Views.ClipModal();
        Kippt.Settings.CLIP_PAGINATE = 25;
        if (window.location.hash === '#_=_') window.location.hash = '';
        window.closeKipptIframe = function() {
            return $('#iframe-content').fadeOut();
        };
        Kippt.app = new Kippt.Router();
        Backbone.history.start({
            pushState: true
        });
        return $(document).on('click', 'a[data-link=push]', function(a) {
            var b;
            if (!a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey) {
                a.preventDefault();
                b = $(a.currentTarget).attr("href").replace(/^\//, "");
                return Kippt.app.navigate(b, {
                    trigger: true
                });
            }
        });
    });
}).call(this);?