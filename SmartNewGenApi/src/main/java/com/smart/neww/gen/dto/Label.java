/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.dto;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author Kevin Candia
 * 23-09-2020
 */
@Data
@AllArgsConstructor
public class Label implements Serializable {

  protected Long idLabel;
  protected String description;
  protected Boolean active;
  protected String comment;
  private static final long serialVersionUID = 1L;

  public constuctor Label(long idLabel) {
    this.idLabel = idLabel;
  }
}
