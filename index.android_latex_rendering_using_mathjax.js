import React, {Component} from 'react';
import {WebView, AppRegistry} from 'react-native';

class MyWeb extends Component {
    render() {

        var url = "</style>"
            + "<script type='text/x-mathjax-config'>"
            + "MathJax.Hub.Config"
            + "({ "
            + "showMathMenu: false, "
            + "jax: ['input/TeX', 'output/HTML-CSS', 'output/CommonHTML'], "
            + "extensions: ['tex2jax.js','MathMenu.js','MathZoom.js', 'CHTML-preview.js'], "
            + "TeX: { extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js', 'noUndefined.js'] },"
            + "tex2jax: { inlineMath: [ ['$','$'], ['\\(','\\)'] ] }"
            + "});"
            + "</script>"
            + "<script type='text/javascript' src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML'></script>"
            + "<p style=\"line-height:1.5; padding: 16 16\" align=\"justify\">"
            + "<span>";

        // Demo display equation
        url += "This is a display equation: $$P=\frac{F}{A}$$";

        url += "This is also an identical display equation with different format:\\[P=\\frac{F}{A}\\]";

        // equations aligned at equal sign
        url += "You can also put aligned equations just like Latex:";

        const align = "\\begin{aligned}"
            + "F\\; &= P \\times A \\\\ "
            + "&= 4000 \\times 0.2\\\\"
            + "&= 800\\; \\text{N}\\end{aligned}";
        url += align;

        url += "This is an inline equation $\\sqrt{b^2-4ac}$";

        // Finally, must enclose the brackets
        url += "</span></p>";

        url += "<div>";
        url += "When $a \\ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$";
        url += "</div>";

        url += "<br/>";
        url += "<br/>";
        url += "<br/>";
        url += "<br/>";

        url += "<div>";
        url += "$$\\frac{1}{\\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}} {1+\\frac{e^{-8\\pi}} {1+\\cdots} } } } $$";
        url += "</div>";

        url += "<br/>";
        url += "<br/>";
        url += "<br/>";
        url += "<br/>";

        url += "<div>";
        url += "$\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$";
        url += "</div>";

        url += "<br/>";
        url += "<br/>";
        url += "<br/>";
        url += "<br/>";

        url += "<div>";
        url += "$P(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma ^2}}$";
        url += "</div>";

        url += "<br/>";
        url += "<br/>";
        url += "<br/>";
        url += "<br/>";

        url += "<div>";
        url += "$f(x) = \\sqrt{1+x} \\quad (x \\ge  -1)$";
        url += "</div>";

        url += "<br/>";
        url += "<br/>";
        url += "<br/>";
        url += "<br/>";

        url += "<div>";
        url += "$\\sqrt{x^{2}+y+1}+a^{2}+ \\frac{23}{45}+ \\left( \\sin \\left(30 \\right) \\right)+ \\tan \\left(90 \\right)- \\sqrt[4]{56}$";
        url += "</div>";

        url += "<br/>";
        url += "<br/>";
        url += "<br/>";
        url += "<br/>";

        url += "<div>";
        url += "$S{O}_{4}+\\downarrow 2H\\overset{{H}_{2}S{O}_{4}+2{S}_{4}}\\rightarrow{H}_{2}+S{O}_{4}\\uparrow \\xrightarrow[{\\Delta }]{{H}_{2}}HCl+H2\\phantom{\\rule{0ex}{0ex}}$";
        url += "</div>";

        url += "<br/>";
        url += "<br/>";
        url += "<br/>";
        url += "<br/>";

        url += "<br/>";
        url += "<br/>";
        url += "<br/>";
        url += "<br/>";

        return (
            <WebView
                source={{html: url}}
                style={{marginTop: 20}}
            />
        );
    }
}

AppRegistry.registerComponent('ExploreReactNativeInIntellij', () => MyWeb);