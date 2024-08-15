package com.mpsedc.CategoryAPI.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "parent_id")
	private Category parent;

	@JsonBackReference
	@OneToMany(mappedBy = "parent")
	private List<Category> children = new ArrayList<>();

}
