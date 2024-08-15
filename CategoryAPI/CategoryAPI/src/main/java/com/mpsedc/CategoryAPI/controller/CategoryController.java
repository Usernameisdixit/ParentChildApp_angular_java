package com.mpsedc.CategoryAPI.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mpsedc.CategoryAPI.model.Category;
import com.mpsedc.CategoryAPI.service.CategoryService;

@RestController
@RequestMapping("api/categories")
@CrossOrigin
public class CategoryController {

	@Autowired
	CategoryService categoryService;

	@GetMapping("/children/{parentId}")
	public ResponseEntity<List<Category>> getCategoriesByParentId(@PathVariable Long parentId) {
		return categoryService.getCategoriesByParentId(parentId);
	}

	@GetMapping("/parentCategory")
	public ResponseEntity<List<Category>> getParentCategories() {

		return categoryService.getParentCategories();

	}

}
