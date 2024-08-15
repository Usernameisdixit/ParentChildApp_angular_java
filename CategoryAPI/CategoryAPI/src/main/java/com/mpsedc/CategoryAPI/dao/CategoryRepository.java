package com.mpsedc.CategoryAPI.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mpsedc.CategoryAPI.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

	List<Category> findByParentId(Long parentId);

}
