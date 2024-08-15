package com.mpsedc.CategoryAPI.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mpsedc.CategoryAPI.dao.CategoryRepository;
import com.mpsedc.CategoryAPI.model.Category;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public ResponseEntity<List<Category>> getCategoriesByParentId(Long parentId) {
		// TODO Auto-generated method stub
		List<Category> categories = categoryRepository.findByParentId(parentId);
		return new ResponseEntity<>(categories, HttpStatus.OK);

	}

	public ResponseEntity<List<Category>> getParentCategories() {
		// TODO Auto-generated method stub
		List<Category> categories = categoryRepository.findByParentId(null);
		return new ResponseEntity<>(categories, HttpStatus.OK);

	}

}
