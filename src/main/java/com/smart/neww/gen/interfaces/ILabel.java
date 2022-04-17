/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.interfaces;

import com.smart.neww.gen.data.LabelDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Kevin Candia
 *         22-09-2020
 */
public interface ILabel {

	public LabelDTO findByIdLabel(Long idLabel);

	public Page<LabelDTO> findAll(Pageable labelPage);

	public void save(LabelDTO labelDTO);

	public void deleteById(Long idLabel);

}
