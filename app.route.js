(function () {
  'use strict'

  angular.module('app').config(config)
  

  config.$inject = ['$stateProvider', '$urlRouterProvider']

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      
      /* .state('login', {
        url: '/',
        //controller: 'LoginController',
        templateUrl: 'view/login_form.html'
      }) */
      .state('admin_berita', {
        url: '/',
		controller: 'BeritaController',
        templateUrl: 'view/admin_berita.html'
      })


      /*.state('app.pekerjakan', {
        url: '/pekerjakan:page',
        controller: 'PekerjakanController',
        templateUrl: 'view/employer/employer.html'
      })

      .state('app.detail_pekerjakan', {
        url: '/detail_pekerjakan/:id',
        controller:'DetailPekerjakanController',
        templateUrl: 'view/employer/detail_employer.html'
      })
      
      .state('app.pekerja', {
        url: '/pekerja/:page',
        controller: 'PekerjaController',
        templateUrl: 'view/employee/employee.html'
      })

      .state('app.detail_pekerja', {
        url: '/detail_pekerja/:id',
        controller: 'DetailPekerjaController',
        templateUrl: 'view/employee/detail_employee.html'
      })

      .state('app.headlines', {
        url: '/headlines',
        controller: 'HeadlinesController',
        templateUrl: 'view/headlines/headlines.html'
      })

      .state('app.lowongan', {
        url: '/lowongan',
        controller: 'LowonganController',
        templateUrl: 'view/lowongan/lowongan.html'
      })

      .state('app.detail_lowongan_Belum_terverifikasi', {
        url: '/detail_lowongan_Belum_terverifikas/:id',
        controller: 'LowonganBelumController',
        templateUrl: 'view/lowongan/detail_lowongan_Belum_terverifikasi.html'
      })
      .state('app.detail_lowongan_terverifikasi', {
        url: '/detail_lowongan.terverifikasi/:id',
        controller: 'SudahVerifikasiController',
        templateUrl: 'view/lowongan/detail_lowongan_terverifikasi.html'
      })

      .state('app.kategori', {
        url: '/kategori',
        controller: 'KategoriController',
        templateUrl: 'view/kategori/kategori.html'
      })
	  */

      .state('404', {
          url: '/404',
          templateUrl: 'view/404.html'
        })
    $urlRouterProvider.when('', '/')
    $urlRouterProvider.otherwise('/404')
  }
})()