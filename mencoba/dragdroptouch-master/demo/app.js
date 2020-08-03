'use strict';

// define angular app (with dependency on Wijmo)
var app = angular.module('app', ['wj']);

// define app's single controller
app.controller('appCtrl', function ($scope) {

    //-----------------------------------------------------------------------------
    // demonstrate standard HTML5 drag/drop.
    // this is based on the html5rocks tutorial published here:
    // http://www.html5rocks.com/en/tutorials/dnd/basics/

    // hook up event handlers
    var cols = document.querySelectorAll('#columns .column');
    [].forEach.call(cols, function (col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
    });

    var dragSrcEl = null;
    function handleDragStart(e) {
        if (e.target.className.indexOf('column') > -1) {
            dragSrcEl = e.target;
            dragSrcEl.style.opacity = '0.4';
            var dt = e.dataTransfer;
            dt.effectAllowed = 'move';
            dt.setData('text', dragSrcEl.innerHTML);
            console.log(cols);
            // customize drag image for one of the panels
            if (dt.setDragImage instanceof Function && e.target.innerHTML.indexOf('X') > -1) {
                var img = new Image();
                img.src = 'dragimage.jpg';
                dt.setDragImage(img, img.width / 2, img.height / 2);
            }
        }
    }
    function handleDragOver(e) {
        if (dragSrcEl) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }
    }
    function handleDragEnter(e) {
        if (dragSrcEl) {
            e.target.classList.add('over');
        }
    }
    function handleDragLeave(e) {
        if (dragSrcEl) {
            e.target.classList.remove('over');
        }
    }
    function handleDragEnd(e) {
        dragSrcEl = null;
        [].forEach.call(cols, function (col) {
            col.style.opacity = '';
            col.classList.remove('over');
        });
    }
    function handleDrop(e) {
        if (dragSrcEl) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            if (dragSrcEl != this) {
                dragSrcEl.innerHTML = e.target.innerHTML;
                this.innerHTML = e.dataTransfer.getData('text');
            }
            console.log(cols);
        }
   
    }

    //-----------------------------------------------------------------------------
    // define some sample data for the FlexGrid and Olap controls
    var products = 'Alpina,Gumpert,Isdera,Keinath,Adler,Borgward'.split(','),
        countries = 'USA,UK,Japan,Germany'.split(',');
    $scope.data = [];
    for (var i = 0; i < 100; i++) {
        $scope.data.push({
            id: i,
            product: products[i % products.length],
            country: countries[i % countries.length],
            sales: Math.round(20 + Math.random() * 100),
            inquiries: Math.round(100 + Math.random() * 1000)
        })
    }
});

function cekkkk(){
    var a = document.getElementById("A");
    var b = document.getElementById("B");
    var c = document.getElementById("C");
    var d = document.getElementById("D");
    var e = document.getElementById("E");
    var jaw = document.getElementById("ja")
    if(a.textContent==-31 && b.textContent==-7 && c.textContent==5 && d.textContent==8 && e.textContent==43){
        jaw.innerHTML = "urutan kamu tepat";
    }else{
        jaw.innerHTML = "urutan kamu masih salah";
    }
    console.log(a.textContent);
    console.log(b.textContent);
    }

    function cekjawaban1(){
        var a = document.getElementById("A");
        var b = document.getElementById("B");
        var c = document.getElementById("C");

        var jaw = document.getElementById("jawpc2")
        if(a.textContent=="haruan" && b.textContent=="papuyu" && c.textContent=="jelawat"){
            jaw.innerHTML = "urutan kamu tepat";
        }else{
            jaw.innerHTML = "urutan kamu masih salah";
        }
        console.log(a.textContent);
        console.log(b.textContent);
        }