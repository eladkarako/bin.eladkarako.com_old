/* ☕ - this little coffe-cup keeps this file "Not-ASCII", and me awake :) */
(function(document, window, left, right, source, target, source_initial_value){
  "use strict";
  
  source.last_value = source.value;

  window.source_change = function source_change(){
                           if(source.last_value === source.value) return true;
                           source.last_value = source.value;

                           target.src = "data:text/html;charset=UTF-8;base64," + btoa(unescape(encodeURIComponent( source.value )))  ;
                           localStorage.setItem("last_value",                    btoa(unescape(encodeURIComponent( source.value ))) );

                           return true;
                         };

  source.onkeyup   = source.oncut     = source.ondragend = 
  source.ondrop    = source.onemptied = source.oninput   = 
  source.onmouseup = source.onpaste   = source.onreset   = 
  source.onchange  = source.onblur    = source.onfocus   = window.source_change;

  /* - - set initial value - - */
  source.value = decodeURIComponent(escape(atob(  source_initial_value  )));
  window.source_change();
  /* - - - - - - - - - - - - - */

  return true;
}(
  document
, window
, document.querySelector("[left]")
, document.querySelector("[right]")
, document.querySelector("[source]")
, document.querySelector("[target]")
, ("string" === typeof localStorage.last_value && "" !== localStorage.last_value) ? localStorage.last_value
                                                : "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGl0ZW1zY29wZT0iIiBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvV2ViUGFnZSIgZGlyPSJsdHIiIGxhbmc9ImVuLVVTIiBsYW5ndWFnZT0iRW5nbGlzaCIgY2hhcnNldD0iVVRGLTgiIGVuY29kaW5nPSJVVEYtOCI+CjxoZWFkPgogIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSxjaHJvbWU9MSIvPgogIDxtZXRhIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSIgICAgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9VVRGLTgiLz4KICA8bWV0YSBuYW1lPSJmcmFnbWVudCIgICAgICAgICAgICAgIGNvbnRlbnQ9IiEiLz4KICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgICAgICAgICAgICAgIGNvbnRlbnQ9ImhlaWdodD1kZXZpY2UtaGVpZ2h0LGluaXRpYWwtc2NhbGU9MS4wLG1heGltdW0tc2NhbGU9MS4wLG1pbmltdW0tc2NhbGU9MS4wLHVzZXItc2NhbGFibGU9bm8sd2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltYWwtdWkiLz4KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiIG1lZGlhPSJhbGwiPgogIC8qPCFbQ0RBVEFbKi8KICBAY2hhcnNldCAiVVRGLTgiOwogIEBuYW1lc3BhY2UgImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiOwogICp7CiAgICBib3gtc2l6aW5nOiAgICAgICAgICAgICAgICAgICBib3JkZXItYm94OwogICAgdGV4dC1zaXplLWFkanVzdDogICAgICAgICAgICAgICAgICAgYXV0bzsKICB9CiAgaHRtbCxib2R5ewogICAgaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJTsKICAgIHdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCU7CiAgICBwYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwOwogICAgbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDsKICB9CiAgaHRtbHsgCiAgICBmb250OiAgICAgIDIwcHQgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlOwogIH0KICBib2R5ewogICAgYmFja2dyb3VuZDogICAgICAgICAgICAgICBub25lIGxpZ2h0Ymx1ZTsKICB9CiAgLypdXT4qLwo8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5PgogIDxzY3JpcHQgdHlwZT0iYXBwbGljYXRpb24vamF2YXNjcmlwdCI+CiAgICAvKjwhW0NEQVRBWyovCiAgICAoZnVuY3Rpb24od2luZG93LGRvY3VtZW50KXsKICAgICAgInVzZSBzdHJpY3QiOwoKICAgICAgY29uc29sZS5sb2coImhlbGxvIik7CiAgICB9KHNlbGYsIHNlbGYuZG9jdW1lbnQpKTsKICAgIC8qXV0+Ki8KICA8L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+"   
));